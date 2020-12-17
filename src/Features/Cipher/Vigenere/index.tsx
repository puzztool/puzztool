import PuzzToolPage from '../../../Common/PuzzToolPage';
import VigenereStream from './VigenereStream';

const PAGE_TITLE = "Vigenere Cipher";
const PAGE_DESCRIPTION = "A Vigenere cipher is a type of substitution " +
  "cipher. It shifts each letter by using a keyword. For example, the " +
  "keyword \"ace\" would shift the first letter by 1, second by 3, and third " +
  "by 5.";

function Vigenere() {
  return (
    <PuzzToolPage description={PAGE_DESCRIPTION} title={PAGE_TITLE}>
      <VigenereStream
        prompt="Enter the text you want to convert, and the keyword to shift the text by."
      />
    </PuzzToolPage>
  );
}

export default Vigenere;
