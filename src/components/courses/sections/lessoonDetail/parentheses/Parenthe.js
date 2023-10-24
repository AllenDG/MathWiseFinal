import React from 'react';
import './Parenthe.css';

const Parenthe = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-card">
        <h2>Parentheses in Mathematics</h2>
        <p>
          Parentheses, also known as round brackets, are a common mathematical
          notation used to group numbers and operations. They play a crucial role
          in mathematical expressions by indicating the order in which operations
          should be performed.
        </p>
      </div>

      <div className="lesson-card">
        <h3>Order of Operations (PEMDAS)</h3>
        <p>
          In simple terms, parentheses help us clarify which parts of an
          expression should be evaluated first. They follow the rules of the
          order of operations (PEMDAS):
        </p>
        <table className="order-of-operations-table">
          <thead>
            <tr>
              <th>PEMDAS</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P</td>
              <td>Parentheses</td>
            </tr>
            <tr>
              <td>E</td>
              <td>Exponents (Powers and Roots)</td>
            </tr>
            <tr>
              <td>M</td>
              <td>Multiplication</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Division</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Addition</td>
            </tr>
            <tr>
              <td>S</td>
              <td>Subtraction</td>
            </tr>
          </tbody>
        </table>
        <p>
          Parentheses have the highest priority in the order of operations. This
          means that any calculations inside parentheses are done before any other
          operations.
        </p>
      </div>

      <div className="lesson-card">
        <h3>Examples</h3>
        <p>Let's look at some examples to understand the importance of parentheses:</p>
        <div className="example-card">
          <h4>Example 1:</h4>
          <p>Calculate 2 * (3 + 4)</p>
          <p>We apply the order of operations (PEMDAS):</p>
          <ol>
            <li>First, evaluate the expression inside the parentheses: 3 + 4 = 7</li>
            <li>Now, the expression becomes: 2 * 7</li>
            <li>Finally, perform the multiplication: 2 * 7 = 14</li>
          </ol>
          <p>So, the answer is 14.</p>
        </div>

        <div className="example-card">
          <h4>Example 2:</h4>
          <p>Calculate (5 - 2) * 4</p>
          <p>Again, we apply the order of operations (PEMDAS):</p>
          <ol>
            <li>First, evaluate the expression inside the parentheses: 5 - 2 = 3</li>
            <li>Now, the expression becomes: 3 * 4</li>
            <li>Finally, perform the multiplication: 3 * 4 = 12</li>
          </ol>
          <p>So, the answer is 12.</p>
        </div>
      </div>

      <div className="lesson-card">
        <h3>Conclusion</h3>
        <p>
          Parentheses are a valuable tool for ensuring the correct order of
          operations in mathematical expressions, helping us avoid ambiguity and
          obtain accurate results.
        </p>
      </div>
    </div>
  );
};

export default Parenthe;
