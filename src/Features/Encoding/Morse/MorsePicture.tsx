interface PictureProps {
  className?: string;
  morseString: string;
}

interface CharacterProps {
  className?: string;
}

export function MorseDot(props: CharacterProps) {
  return (
    <svg className={props.className} viewBox="0 0 30 30">
      <circle cx="15" cy="15" r="15" />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

export function MorseDash(props: CharacterProps) {
  return (
    <svg className={props.className} viewBox="0 0 90 30">
      <rect width="90" height="30" />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

function MorsePicture(props: PictureProps) {
  return (
    <>
      {Array.from(props.morseString).map((value: string, index: number) => (
        <span className={props.className} key={index}>
          {value === "." ? <MorseDot /> : <MorseDash />}
        </span>
      ))}
    </>
  );
}

export default MorsePicture;
