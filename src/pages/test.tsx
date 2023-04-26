import React from "react";
import Button from "../comps/items/buttons/Button";
import Select from "../comps/items/inputs/Select";
import TextSection from "../comps/sections/texts/TextSection";
import PhoneIcon from "../../assets/phone.svg";
import GhostImage from "../comps/items/images/GhostImage";
import TextArea from "../comps/items/inputs/TextArea";
import TextField from "../comps/items/inputs/TextField";

const TestPage = (): JSX.Element => (
  <div className="py-10 space-y-10">
    <div className="container mx-auto space-x-2">
      <Button
        link
        href="/"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="outline"
        href="/"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="text"
        href="/"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        color="secondary"
        href="/"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="outline"
        color="secondary"
        href="/"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="text"
        color="secondary"
        href="/"
        label="Go back home"
        icon={<PhoneIcon />}
      />
    </div>

    <div className="container mx-auto space-x-2">
      <Button
        link
        href="/"
        size="small"
        label="Go back home"
        icon={<GhostImage
          src="https://cms.hestiaecobat.fr/uploads/alarm_on_b22d73a308.svg"
          className="relative w-6 h-6"
          layout="fill"
        />}
      />
      <Button
        link
        type="outline"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="text"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        color="secondary"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="outline"
        color="secondary"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        link
        type="text"
        color="secondary"
        href="/"
        size="small"
        label="Go back home"
        icon={<GhostImage
          src="https://cms.hestiaecobat.fr/uploads/alarm_on_b22d73a308.svg"
          className="relative w-6 h-6"
          layout="fill"
        />}
      />
    </div>

    <div className="container mx-auto space-x-2">
      <Button
        layout="btn002"
        link
        href="/"
        size="small"
        label="Go back home"
        icon={<GhostImage
          src="https://cms.hestiaecobat.fr/uploads/alarm_on_b22d73a308.svg"
          className="relative w-6 h-6"
          layout="fill"
        />}
      />
      <Button
        layout="btn002"
        link
        type="outline"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        layout="btn002"
        link
        type="text"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        layout="btn002"
        link
        color="secondary"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        layout="btn002"
        link
        type="outline"
        color="secondary"
        href="/"
        size="small"
        label="Go back home"
        icon={<PhoneIcon />}
      />
      <Button
        layout="btn002"
        link
        type="text"
        color="secondary"
        href="/"
        size="small"
        label="Go back home"
        icon={<GhostImage
          src="https://cms.hestiaecobat.fr/uploads/alarm_on_b22d73a308.svg"
          className="relative w-6 h-6"
          layout="fill"
        />}
      />
    </div>

    <div className="container mx-auto space-y-2">
      <TextArea
        layout="default"
        label="Textarea"
        rows={5}
      />

      <TextField
        layout="default"
        label="Textfield"
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
