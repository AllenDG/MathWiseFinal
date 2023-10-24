import React from 'react';
import './Pemd.css'; // Create a CSS file for styling

const Pemd = () => {
  return (
    <div className="pemd-container">
      <div className="pemd-card">
        <h2>PEMDAS - Order of Operations</h2>
        <p>
          PEMDAS is an acronym used to remember the order of operations when
          solving mathematical expressions. It stands for:
        </p>
        <ul>
          <li>P - Parentheses</li>
          <li>E - Exponents (Powers and Roots)</li>
          <li>M - Multiplication</li>
          <li>D - Division</li>
          <li>A - Addition</li>
          <li>S - Subtraction</li>
        </ul>
        <p>
          When you have a mathematical expression with multiple operations, you
          should follow the order of operations to get the correct result. Here's
          how it works:
        </p>
        <ol>
          <li>
            First, evaluate anything inside parentheses or brackets (P).
          </li>
          <li>
            Next, simplify any exponents or roots (E).
          </li>
          <li>
            Then, perform multiplication and division from left to right (M and D).
          </li>
          <li>
            Finally, do addition and subtraction from left to right (A and S).
          </li>
        </ol>
        <p>
          Let's look at an example:
        </p>
        <p>
          <strong>Example 1:</strong> Calculate 4 + 3 × (5 - 2)
        </p>
        <p>
          We apply PEMDAS:
        </p>
        <ol>
          <li>First, evaluate the expression inside the parentheses: 5 - 2 = 3</li>
          <li>Now, the expression becomes: 4 + 3 × 3</li>
          <li>Next, perform multiplication: 3 × 3 = 9</li>
          <li>Finally, do addition: 4 + 9 = 13</li>
        </ol>
        <p>
          So, the answer is 13.
        </p>
        <p>
          <strong>Example 2:</strong> Calculate (2 + 3) * (4 - 1)
        </p>
        <p>
          Applying PEMDAS again:
        </p>
        <ol>
          <li>First, evaluate inside the parentheses: 2 + 3 = 5, 4 - 1 = 3</li>
          <li>The expression becomes: 5 * 3</li>
          <li>Finally, perform multiplication: 5 * 3 = 15</li>
        </ol>
        <p>
          So, the answer is 15.
        </p>
        <p>
          Understanding the order of operations is important in solving complex mathematical expressions. It ensures that everyone gets the same result when following the rules. So remember, PEMDAS is your friend in math!
        </p>
      </div>
    </div>
  );
};

export default Pemd;
