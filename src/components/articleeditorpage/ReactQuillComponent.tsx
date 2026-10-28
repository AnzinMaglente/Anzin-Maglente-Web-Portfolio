import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function ReactQuillComponent({
  value,
  onChange,
}: {
  value: any;
  onChange: (delta: any) => void;
}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        { script: "sub" },
        { script: "super" },
      ],
      ["blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ direction: "rtl" }, { align: [] }],
      ["link", "image", "video", "formula"],
      [{ size: ["small", false, "large", "huge"] }, { font: [] }],
      [{ color: [] }, { background: [] }],
    ],
    handlers: {},
  };

  const formats = [
    "header",

    "bold",
    "italic",
    "underline",
    "strike",
    "script",

    "blockquote",

    "list",
    "indent",

    "direction",
    "align",

    "link",
    "image",
    "video",
    "formula",

    "size",
    "font",

    "color",
    "background",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(_content, _delta, _source, editor) => {
          onChange(editor.getContents());
        }}
        className="h-80 xl:h-105"
        modules={modules}
        formats={formats}
      />
    </div>
  );
}

export default ReactQuillComponent;
