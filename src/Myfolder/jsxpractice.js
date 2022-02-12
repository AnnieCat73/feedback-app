function App() {
  const title = "Blog post";
  const body = "This is my blog post";
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}
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

      
    </div>
    
  );
}

export default App;