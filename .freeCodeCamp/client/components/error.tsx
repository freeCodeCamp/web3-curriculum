export const E44o5 = ({
  text,
  error
}: {
  text: string;
  error: Error | null;
}) => {
  return (
    <main className='e44o5'>
      <div className='container'>
        <h1>Error 4XX - 5XX</h1>
        <p>{text}</p>
        {error && (
          <details>
            <summary>More Info</summary>

            <p>{JSON.stringify(error, null, 2)}</p>
          </details>
        )}
        <h2>To Keep Learning:</h2>
        <ul>
          <li>First, try refresh this page</li>
        </ul>
        <h2>Otherwise:</h2>
        <ol>
          <li>Open the command palette</li>
          <li>
            Select the <code>freeCodeCamp: Shutdown Course</code> command
          </li>
          <li>Open the command palette</li>
          <li>
            Select the <code>freeCodeCamp: Run Course</code> command
          </li>
        </ol>
      </div>
    </main>
  );
};
