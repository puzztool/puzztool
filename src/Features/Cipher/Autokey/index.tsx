import PuzzToolPage from '../../../Common/PuzzToolPage';
import AutokeyStream from './AutokeyStream';

const PAGE_TITLE = "Autokey Cipher";
const PAGE_DESCRIPTION = "An autokey cipher is similar to a Vigenere cipher, " +
  "where the plaintext is used after the key runs out. This addresses the " +
  "key length repetition issues with the Vigenere cipher.";

function Autokey() {
  return (
    <PuzzToolPage description={PAGE_DESCRIPTION} title={PAGE_TITLE} >
      <AutokeyStream
        prompt="Enter the text and key, and select encrypt or decrypt."
      />
    </PuzzToolPage>
  );
}

export default Autokey;
