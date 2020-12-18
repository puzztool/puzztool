import PuzzToolPage from '../../../Common/PuzzToolPage';
import CaesarStream from './CaesarStream';

const PAGE_TITLE = "Caesar Cipher";
const PAGE_DESCRIPTION = "A Caesar cipher works by shifting every letter by " +
  "a fixed amount. This is a simple cipher - there are only 25 different " +
  "shifts for each letter.";

function Caesar() {
  return (
    <PuzzToolPage description={PAGE_DESCRIPTION} title={PAGE_TITLE}>
      <CaesarStream
        prompt="Type in your text, and all possible shifts will be displayed."
      />
    </PuzzToolPage>
  );
}

export default Caesar;
