function App() {
  const title = "Blog post";
  const body = "This is my blog post";
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}
  ]
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const animals = [
    {id: 1, type: 'cat'},
    {id: 2, type: 'dog'},
    {id: 3, type: 'rabbit'},
    {id: 4, type: 'hamster'}
  ]


  return (
    
    <div>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))};{/*or key={id}*/}
        </ul>
      </div>
      {5 + 5}
      {Math.random()* (5 + 5)}
      <ul>
        {numbers.map(number => (
          <li>{number}</li>
        ))}
      </ul>
      <ul>
          {animals.map((animal, index) => (
            <li key={index}>{animal.type}</li>
          ))}
        </ul>
    </div>
    
  );
}

export default App;