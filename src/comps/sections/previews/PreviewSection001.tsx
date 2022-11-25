import React, {useCallback, useEffect, useRef, useState} from "react";
import cx from "classnames";
import {Document, Page, pdfjs} from "react-pdf";

import {getAttr, getUrl, isGray} from "../../../utils";
import {PreviewSectionProps} from "./previewsectionprops";

pdfjs.GlobalWorkerOptions.workerSrc
= `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const defaultWidth = 300;
const marginWidth = 40;

const PreviewSection001 = ({data, classes}: PreviewSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const background = getAttr(data, "background") as string;
  const document = getAttr(data, "document");
  const fileUrl = getUrl(document);

  const [pdfWidth, setPdfWidth] = useState(defaultWidth);
  const pdfRef = useRef<HTMLDivElement>(null);

  const [numPages, setNumPages] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDocumentLoadSuccess = useCallback((pdf: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setNumPages(pdf.numPages);
  }, []);

  const rootClass = cx(
    "prs001",
    "py-12",
    {"bg-neutral-50": isGray(background)},
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container mx-auto space-y-6",
    classes?.container,
  );
  const titleClass = cx(
    "section-title",
    "text-5xl leading-snug text-center",
    classes?.title,
  );
  const subtitleClass = cx(
    "section-subtitle",
    "text-base leading-normal tracking-[0.5px] text-center",
    classes?.subtitle,
  );
  const documentClass = cx(
    "section-document",
    "flex flex-col items-center bg-neutral-50 py-6 space-y-4",
    classes?.document,
  );

  useEffect(() => {
    setPdfWidth((pdfRef.current?.getBoundingClientRect()?.width ?? defaultWidth) - marginWidth);

    const onResize = () => {
      setPdfWidth((pdfRef.current?.getBoundingClientRect()?.width ?? defaultWidth) - marginWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid lg:grid-cols-6 lg:gap-6">
          <div className="lg:col-start-2 lg:col-span-4 space-y-4">
            {Boolean(title) && <h3 className={titleClass}>{title}</h3>}
            {Boolean(subtitle) && <p className={subtitleClass}>{subtitle}</p>}
          </div>
        </div>
        {
          Boolean(fileUrl) && (
            <div className="grid lg:grid-cols-12 lg:gap-6">
              <div ref={pdfRef} className="lg:col-start-2 lg:col-span-10 space-y-8">
                <Document
                  className={documentClass}
                  file={fileUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  renderMode="canvas"
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      width={pdfWidth}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    />
                  ))}
                </Document>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

PreviewSection001.propTypes = {};

export default React.memo(PreviewSection001);
