```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing return statement in cleanup function
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // ...
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```