import PuzzToolPage from "../../../Common/PuzzToolPage";
import Base64Stream from "./Base64Stream";

function getDescription() {
  return (
    <p>
      Base64 encodes binary data as ASCII text using a 64-character alphabet.
      Enter plain text to see all encoded variants, or paste a Base64 string
      (standard, URL-safe, or unpadded) to decode it.
    </p>
  );
}

function Base64() {
  return (
    <PuzzToolPage description={getDescription()} title="Base64">
      <Base64Stream prompt="Input" />
    </PuzzToolPage>
  );
}

export default Base64;
