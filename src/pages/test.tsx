import React from "react";
import PropTypes from "prop-types";
import Button from "../comps/items/buttons/Button";
import Select from "../comps/items/inputs/Select";
import TextSection from "../comps/sections/texts/TextSection";

const TestPage = props => (
  <div className="py-10 space-y-10">
    <div className="container mx-auto">
      <Button
        link
        href="/"
        label="Go back home"
      />
    </div>

    <div className="container mx-auto">
      <Select
        name="service"
        label="Service"
        size="medium"
        color="primary"
        placeholder="Service"
        options={[
          {value: "A", label: "A"},
          {value: "b", label: "b"},
          {value: "C", label: "C"},
          {value: "D", label: "D"},
        ]}
      />
    </div>

    <TextSection
      data={{
        layout: "ts001",
        content: `
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>

        <p>Lorem ipsum dolor sit amen</p>
        <pre> line 1
        line 2 </pre>
        <blockquote>quoted</blockquote>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <table>
          <tr>
            <td>Name</td>
            <td>Balance</td>
          </tr>
        </table>
        <a href="">Go to homepage</a>
        `,
      }}
    />
  </div>
);

export default TestPage;
