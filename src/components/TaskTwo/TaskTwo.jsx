import React from "react";
import styles from "./taskTwo.module.css";
const TaskTwo = () => {
  return (
    <div className={styles.taskTwo}>
      <code>
        <pre>
          function calculateTotalPrice(products)&#123;
          <br />
          &#47;&#47;
          <span className={styles.comments}>
            Should be use let because this value would be change
          </span>
          <br />
          <span className={styles.error}>const total</span>= 0;
          <br />
          &nbsp; for (let i = 0; i &#60; products.length; i++) &#123;
          <br />
          &nbsp; &nbsp; if (products[i].price)&#123;
          <br />
          &nbsp; &nbsp;&nbsp;&nbsp; &#47;&#47;
          <span className={styles.comments}>
            If the value of prices is a string instead to added would be
            concatenate it
          </span>
          <br />
          &nbsp; &nbsp; &nbsp;
          <span className={styles.error}>total += products[i].price;</span>
          <br />
          &nbsp; &nbsp;&nbsp;&nbsp;&#125;
          <br /> &nbsp;&#125;
          <br />
          &nbsp;&nbsp;return total
          <br /> &#125;
        </pre>
      </code>

      <h2>REFACTOR </h2>
      <code>
        <pre>
          function calculateTotalPrice(products)&#123;
          <br />
          <br />
          &nbsp; <span className={styles.refactor}>const totalSum</span> =
          products.<span className={styles.refactor}>reduce</span>((acc,curr) =>
          &#123;
          <br />
          &nbsp; &nbsp; if(curr.price)&#123; <br />
          &nbsp; &nbsp; &nbsp;
          <span className={styles.comments}>
            &#47;&#47; We change the value of price to a number in case of the
            price been a string
          </span>
          <br />
          &nbsp; &nbsp; &nbsp;&nbsp;acc +=
          <span className={styles.refactor}>
            Number(curr.price)
          </span> <br /> &nbsp;&nbsp;&nbsp;&#125;
          <br />
          &nbsp; &nbsp; &nbsp;
          <span className={styles.comments}>
            &#47;&#47; We return the value of accumulate in cases doesnt exist
            key of price
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;and when the already sum the the
            current value of price
          </span>
          <br />
          &nbsp; &nbsp; &nbsp;return acc
          <br />
          <span className={styles.comments}>
            &nbsp; &nbsp; &#47;&#47; We set then initial value of the
            accumulator
          </span>
          <br />
          &nbsp;&nbsp;&#125;,0);
          <br />
          &nbsp; &nbsp;return totalSum
          <br />
          &#125;
        </pre>
        <br />
        const testCase = [&#123;item: 'item1', price: 12.1&#125;,&#123;item:
        'item2', price: 20&#125;, &#123;item: 'item3'&#125;,&#123;item: 'item4',
        price: '1000'&#125;]
      </code>
    </div>
  );
};

export default TaskTwo;
