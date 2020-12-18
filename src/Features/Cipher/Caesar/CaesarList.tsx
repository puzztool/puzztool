import './CaesarList.scss';

interface Props {
  list: string[];
}

function CaesarList(props: Props) {
  function renderListItems() {
    return props.list.map((value: string, index: number) => {
      if (index === 0) {
        return null;
      }

      return (
        <div key={index}>{index.toString().padStart(2)}: {value}</div>
      );
    });
  }

  return (
    <pre className="CaesarList">
      {renderListItems()}
    </pre>
  );
}

export default CaesarList;
