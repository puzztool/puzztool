import { Helmet } from "react-helmet-async";

const PUZZTOOL_TITLE = "PuzzTool";

interface Props {
  title?: string;
}

function PuzzToolDocumentTitle({ title }: Props) {
  function getDocumentTitle() {
    if (title) {
      return `${title} - ${PUZZTOOL_TITLE}`;
    }

    return PUZZTOOL_TITLE;
  }

  return (
    <Helmet>
      <title>{getDocumentTitle()}</title>
    </Helmet>
  );
}

export default PuzzToolDocumentTitle;
