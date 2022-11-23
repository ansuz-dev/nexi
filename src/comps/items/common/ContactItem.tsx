import React from "react";

export interface ContactItemProps {
  name?: string;
  phone?: string;
  email?: string;
}

const ContactItem = (props: ContactItemProps) : JSX.Element => (
  <div className="space-y-2 text-black-secondary fill-black-secondary">
    {Boolean(props.name) && <p>{props.name}</p>}
    {
      Boolean(props.email) && (
        <p>
          <a
            href={`mailto:${props.email as string}`}
            className="inline-flex items-center space-x-2 hover:text-secondary-500 hover:fill-secondary-500"
          >
            <span className="shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z" />
                </g>
              </svg>
            </span>
            <span>{props.email}</span>
          </a>
        </p>
      )
    }
    {
      Boolean(props.phone) && (
        <p>
          <a
            href={`tel:${props.phone as string}`}
            className="inline-flex items-center space-x-2 hover:text-secondary-500 hover:fill-secondary-500"
          >
            <span className="shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.621 18.604 9.81267 17.3373 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.47933 8.29567 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72933 7.74567 9.688 7.937C9.646 8.129 9.55 8.3 9.4 8.45L7 10.9C7.7 12.1 8.575 13.225 9.625 14.275C10.675 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.2793 14.2373 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1123 20.775 15.287C20.925 15.4623 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" />
                </g>
              </svg>
            </span>
            <span>{props.phone}</span>
          </a>
        </p>
      )
    }
  </div>
);

ContactItem.defaultProps = {
  name: null,
  phone: null,
  email: null,
};

export default ContactItem;
