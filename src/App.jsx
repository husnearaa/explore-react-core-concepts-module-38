import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'
import BookStore from './BookStore'

function App() {
  const actors = ['sakib', 'Shoriful Raj', 'siyam', 'shuvo'];
  
  
  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'chemistry', price: 120},
    {id: 3, name: 'math', price: 130},
    {id: 4, name: 'biology', price: 150}
  ]
  
  const singers = [
    { id: 1, name: 'kona', age: 34 },
    { id: 2, name: 'runa liala', age: 50 },
    { id: 3, name: 'tahsan', age: 40 },
    { id: 4, name: 'habib', age: 37 },
    { id: 5, name: 'pritom', age: 30 }
  ]
  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Core Concepts"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55" ></Device>
      <Device name="mobile" price="500"></Device>
      <Device name="watch" price="200"></Device>
      <Person></Person>
      <Student grade="7"  score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  return <h2>this device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 }
  return <h3>I am a {person.name} with age: {age}</h3>
}

const { grade, score } = { grade: '7', score: '99' };

function Student({ grade = 1, score = 0 }) {
  // console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a a student</h3>
      <p>class: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Junior developer</h5>
      <p>work: coding</p>
    </div>
  )
}

export default App
