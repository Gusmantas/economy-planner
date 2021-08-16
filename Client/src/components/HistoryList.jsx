const HistoryList = ({ list, title }) => {
  const renderListElements = () => {
    return list.map((element) => (
      <div key={element.id}>
        <p>Name: {element.name}</p>
        <p>Date: {element.date}</p>
        <p>Sum: {element.sum}</p>
        <p>Category: {element.category}</p>
      </div>
    ));
  };

  return (
    <div>
      <header>{title}</header>
      {list && renderListElements()}
    </div>
  );
};

export default HistoryList;
