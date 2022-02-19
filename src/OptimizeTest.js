import React, { useState, useEffect } from "react";

// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`update::text:${text}`);
//   });
//   return <div>{text}</div>;
// });
// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`update::count:${count}`);
//   });
//   return <div>{count}</div>;
// });

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`counterA update count:${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counterA update count:${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true //이전프롭스 현재프롭스가 같다-> 리렌더링 안함
  // return false //다르다 리렌더링ㅇ
  return prevProps.obj.count === nextProps.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  //   const [text, setText] = useState("");
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />

        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}

      <div>
        <h2>counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />

        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};
export default OptimizeTest;
