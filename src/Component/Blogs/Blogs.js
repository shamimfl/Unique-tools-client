import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className='mt-10 mb-10   font-semibold'>
        <p>Q 1: How will you improve the performance of a React Application?</p>
        <p>ANS : Keeping component state local where necessary.
          Memoizing React components to prevent unnecessary re-renders.
          Code-splitting in React using dynamic import()
          Windowing or list virtualization in React.
          Lazy loading images in React</p>
      </div>
      <div className='mt-10 mb-10'>
        <p>Q 2 :What are the different ways to manage a state in a React application?</p>
        <p>ANS :5 Types of Application State in React and How They Help in State Management</p>
        <li>The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first.
        </li>
        <li>The Solution</li>
        <li>Data State</li>
        <li>Control State</li>
        <li>Session State</li>
        <li>Location State</li>
      </div>
      <div className='mt-10 mb-5'>
        <p>Q 3 : How does prototypical inheritance work</p>
        <p>ANS : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
      </div>
      <div>
        <p>Q 4 : </p>
      </div>

      <div>
        <p>Q 5 : You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
        <p>ANS : How do you find the product of an array element?
          To find the product of elements of an array.
          create an empty variable. ( product)
          Initialize it with 1.
          In a loop traverse through each element (or get each element from user) multiply each element to product.
          Print the product</p>
      </div>
      <div>
        <p>Q 6 : What is a unit test? Why should write unit tests?</p>
        <p>ANS :  Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure</p>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Blogs;