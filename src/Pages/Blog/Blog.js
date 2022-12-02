import React from 'react';

const Blog = () => {
    return (
        
            <div className=" w-full dark:bg-gray-800 dark:text-gray-100">
                <div className="container  mb-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                   
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">What are the different ways to manage a state in a React application?</h2>
                        <p className="mt-2">Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs. The most important principle is that state shouldn’t contain redundant or duplicated information. If there’s some unnecessary state, it’s easy to forget to update it, and introduce bugs!
                        <br />
                        Sometimes, we want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”.When we re-render a component, React needs to decide which parts of the tree to keep (and update), and which parts to discard or re-create from scratch. In most cases, Reacts automatic behavior works well enough. By default, React preserves the parts of the tree that “match up” with the previously rendered component tree.
                        </p>
                    </div>
                   
                </div> 
                  <div className="container mb-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">How does prototypical inheritance work?</h2>
                        <p className="mt-2">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </div>
                   
                </div>
                <div className="container max-w-4xl mb-10 px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    
                    <div className="my-5">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">What is a unit test? Why should we write unit tests?</h2>
                        <p className="mt-2">
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                        <br />
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                        </p>
                    </div>
                   
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold mb-4 hover:underline">React vs. Angular vs. Vue?</h2>
                        
                        <p className="mt-2">
                        <span className='font-bold'>React:</span>
                        The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                        </p>
                        <p className="mt-2">
                        <span className='font-bold'>Angular:</span>
                        AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write.
                        </p>
                        <p className="mt-2">
                        <span className='font-bold'>Vue:</span>
                        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.
                        </p>
                    </div>
                   
                </div>
            </div>
          
        
    );
};

export default Blog;