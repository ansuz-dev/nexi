import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import cx from "classnames";
import {Document, Page, pdfjs} from "react-pdf";

import {getAttr, getUrl, isGray} from "../../../utils";
import {PreviewSectionProps} from "./previewsectionprops";

pdfjs.GlobalWorkerOptions.workerSrc
= `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const defaultWidth = 640;
const marginWidth = 20;

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

  const {
    rootClass,
    containerClass,
    titleClass,
    subtitleClass,
    documentClass,
  } = useMemo(() => ({
    rootClass: cx(
      "prs001",
      "py-8 md:py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto space-y-6",
      classes?.container,
    ),
    titleClass: cx(
      "section-title",
      "text-center",
      "text-2xl font-normal leading-normal",
      "md:text-4xl md:font-normal md:leading-snug md:tracking-[0.25px]",
      "lg:text-5xl lg:font-normal lg:leading-snug",
      classes?.title,
    ),
    subtitleClass: cx(
      "section-subtitle",
      "text-base font-normal leading-normal tracking-[0.5px] text-center",
      classes?.subtitle,
    ),
    documentClass: cx(
      "section-document",
      "flex flex-col items-center bg-neutral-50 md:py-6 space-y-4",
      classes?.document,
    ),
  }), [background, classes]);

  useEffect(() => {
    const onResize = () => {
      const width = pdfRef.current?.getBoundingClientRect()?.width ?? defaultWidth;
      const margin = width > defaultWidth ? marginWidth : 0;
      setPdfWidth(width - margin);
    };

    onResize();
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

export default React.memo(PreviewSection001);
