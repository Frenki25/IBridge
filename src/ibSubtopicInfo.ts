export const IB_SUBTOPIC_INFO: Record<string, Record<string, Record<string, string>>> = {
  Mathematics: {
    "Number and Algebra": {
      "Arithmetic and geometric sequences and series": `# Arithmetic and Geometric Sequences and Series

## Introduction
Sequences and series are fundamental concepts in mathematics, especially in IB Mathematics. They help us understand patterns, model real-world phenomena, and solve complex problems. This topic covers definitions, formulas, applications, and IB exam tips for both arithmetic and geometric sequences and series.

---

## 1. Definitions
- **Sequence:** An ordered list of numbers, each called a term.
- **Series:** The sum of the terms of a sequence.
- **Arithmetic Sequence:** Each term is obtained by adding a constant difference to the previous term.
- **Geometric Sequence:** Each term is obtained by multiplying the previous term by a constant ratio.

---

## 2. Arithmetic Sequences
### General Form
- First term: a₁
- Common difference: d
- nth term: aₙ = a₁ + (n-1)d

### Example
Find the 10th term of the sequence: 3, 7, 11, 15, ...
- a₁ = 3, d = 4
- a₁₀ = 3 + (10-1)×4 = 3 + 36 = 39

### Sum of Arithmetic Series
- Sₙ = n/2(a₁ + aₙ)
- Sₙ = n/2[2a₁ + (n-1)d]

### Example
Find the sum of the first 20 terms of 5, 8, 11, ...
- a₁ = 5, d = 3, n = 20
- a₂₀ = 5 + 19×3 = 62
- S₂₀ = 20/2(5 + 62) = 10×67 = 670

---

## 3. Geometric Sequences
### General Form
- First term: a₁
- Common ratio: r
- nth term: aₙ = a₁ × rⁿ⁻¹

### Example
Find the 6th term of the sequence: 2, 6, 18, ...
- a₁ = 2, r = 3
- a₆ = 2 × 3⁵ = 2 × 243 = 486

### Sum of Geometric Series
- Sₙ = a₁(1 - rⁿ)/(1 - r) (for r ≠ 1)

### Example
Find the sum of the first 5 terms of 4, 8, 16, ...
- a₁ = 4, r = 2, n = 5
- S₅ = 4(1 - 2⁵)/(1 - 2) = 4(1 - 32)/(-1) = 4 × 31 = 124

---

## 4. Applications
- **Finance:** Compound interest, loan repayments, savings plans.
- **Population Growth:** Modeling exponential growth or decay.
- **Physics:** Describing repeated processes (e.g., bouncing ball).
- **Computer Science:** Algorithms, recursive functions.

---

## 5. IB Exam Tips
- Always identify a₁, d, or r before solving.
- Check if the sequence is arithmetic or geometric.
- Use correct formulas for sums and nth terms.
- Show all working for full marks.
- Practice with past IB questions.

---

## 6. Advanced Concepts
- **Infinite Geometric Series:** |r| < 1, S∞ = a₁/(1 - r)
- **Sigma Notation:** Σₖ₌₁ⁿ aₖ
- **Proofs:** Prove formulas using induction.

---

## 7. Common Mistakes
- Mixing up d and r.
- Forgetting to use n-1 in formulas.
- Not checking if r is less than 1 for infinite series.

---

## 8. Practice Problems
1. Find the sum of the first 50 terms of the sequence: 10, 13, 16, ...
2. What is the 8th term of the geometric sequence: 5, 15, 45, ...?
3. If a₁ = 7, d = 2, find S₁₅.
4. For a₁ = 3, r = 0.5, find S∞.

---

## 9. Summary
Arithmetic and geometric sequences and series are powerful tools for modeling and solving problems. Mastering their formulas, applications, and exam strategies is essential for IB success.

---

## 10. Further Reading & Resources
- IB Mathematics Textbook (Oxford, Haese)
- Khan Academy: Sequences and Series
- IB Past Papers and Markschemes
- Desmos Graphing Calculator: https://www.desmos.com/calculator

---

## Diagram (Text Description)
Imagine a number line with dots at each term of a sequence. For arithmetic, the dots are evenly spaced. For geometric, the spacing increases or decreases exponentially.

---

## End of Topic
`,
      "Exponents and logarithms": `# Exponents and Logarithms

## Introduction
Exponents and logarithms are essential tools in mathematics, especially for modeling growth, decay, and solving equations. Exponents represent repeated multiplication, while logarithms are their inverse operation.

---

## 1. Exponents
- **Definition:** If a is a real number and n is a positive integer, then a^n means a multiplied by itself n times.
- **Properties:**
  - a^m * a^n = a^(m+n)
  - (a^m)^n = a^(mn)
  - a^0 = 1
  - a^{-n} = 1/a^n

### Example
2^3 = 2 × 2 × 2 = 8

---

## 2. Logarithms
- **Definition:** log_b(a) is the exponent to which b must be raised to get a.
- **Properties:**
  - log_b(xy) = log_b(x) + log_b(y)
  - log_b(x/y) = log_b(x) - log_b(y)
  - log_b(x^n) = n log_b(x)

### Example
log_2(8) = 3 because 2^3 = 8

---

## 3. Applications
- **Scientific Notation:** Expressing large/small numbers using powers of 10.
- **Population Models:** Exponential growth/decay.
- **pH in Chemistry:** pH = -log_10([H+])

---

## 4. IB Exam Tips
- Know exponent and logarithm laws.
- Practice converting between exponential and logarithmic forms.
- Use properties to simplify expressions and solve equations.

---

## 5. Practice Problems
1. Simplify: 2^4 × 2^3
2. Solve for x: log_3(x) = 4
3. Express 0.00056 in scientific notation.

---

## Summary
Exponents and logarithms are powerful for solving equations, modeling change, and understanding real-world phenomena.

---

## Further Reading
- Khan Academy: Exponents & Logarithms
- IB Mathematics Textbook
- IB Past Papers
`,
      "Radicals": `# Radicals

## Introduction
Radicals involve roots, such as square roots (√x), cube roots (∛x), and higher-order roots. They are used to solve equations, simplify expressions, and appear in geometry and science.

---

## 1. Definitions
- **Square Root:** √x is a number that, when squared, gives x.
- **Cube Root:** ∛x is a number that, when cubed, gives x.

---

## 2. Properties
- √(a^2) = |a|
- √(ab) = √a × √b
- √(a/b) = √a / √b

---

## 3. Rationalizing Denominators
To simplify fractions with radicals in the denominator, multiply numerator and denominator by a suitable radical.

### Example
1/√2 = (1/√2) × (√2/√2) = √2/2

---

## 4. Applications
- **Geometry:** Pythagoras' theorem, distance formula.
- **Science:** Calculating energy, speed, and more.

---

## 5. IB Exam Tips
- Practice simplifying radical expressions.
- Rationalize denominators for full marks.
- Check for extraneous solutions when solving radical equations.

---

## 6. Practice Problems
1. Simplify: √50
2. Rationalize: 3/(2√5)
3. Solve: √x = 7

---

## Summary
Radicals are key for solving equations and understanding geometric relationships.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Radicals
- IB Past Papers
`,
      "Financial mathematics": `# Financial Mathematics

## Introduction
Financial mathematics covers concepts like simple and compound interest, annuities, and loans. These are vital for personal finance, investments, and economic modeling.

---

## 1. Simple Interest
- Formula: I = Prt
  - I = interest, P = principal, r = rate, t = time

---

## 2. Compound Interest
- Formula: A = P(1 + r/n)^(nt)
  - A = amount, P = principal, r = rate, n = times per year, t = years

### Example
If P = $1000, r = 5% (0.05), n = 1, t = 3:
A = 1000(1 + 0.05)^3 = 1000 × 1.157625 = $1157.63

---

## 3. Annuities and Loans
- Annuities: Regular payments over time.
- Loans: Repayment schedules, interest calculations.

---

## 4. Applications
- **Personal Finance:** Savings, retirement planning.
- **Investments:** Growth of stocks, bonds.
- **Economics:** Modeling inflation, depreciation.

---

## 5. IB Exam Tips
- Know formulas for interest and annuities.
- Practice with real-world scenarios.
- Show all working for full marks.

---

## 6. Practice Problems
1. Calculate simple interest for $500 at 4% for 2 years.
2. Find compound interest for $2000 at 3% for 5 years.
3. What is the total amount after 10 years for $1000 at 6% compounded annually?

---

## Summary
Financial mathematics is practical and essential for everyday life and IB exams.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Finance
- IB Past Papers
`,
      "Sets": `# Sets

## Introduction
Sets are collections of distinct objects. Set theory is foundational for probability, logic, and computer science.

---

## 1. Definitions
- **Set:** A collection of elements.
- **Union (A ∪ B):** All elements in A or B.
- **Intersection (A ∩ B):** Elements in both A and B.
- **Complement (A'):** Elements not in A.

---

## 2. Venn Diagrams
Visual representations of sets and their relationships.

---

## 3. Applications
- **Probability:** Events as sets.
- **Logic:** Truth tables, logical statements.
- **Computer Science:** Databases, algorithms.

---

## 4. IB Exam Tips
- Draw Venn diagrams for set problems.
- Use correct notation.
- Practice set operations.

---

## 5. Practice Problems
1. List elements in A ∪ B if A = {1,2,3}, B = {3,4,5}
2. Draw a Venn diagram for three sets.
3. Find the complement of A = {x | x > 0}

---

## Summary
Sets are a powerful way to organize and analyze information.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Sets
- IB Past Papers
`,
      "Complex numbers": `# Complex Numbers

## Introduction
Complex numbers extend the real number system and are used in engineering, physics, and advanced mathematics.

---

## 1. Definition
- **Complex Number:** a + bi, where a is real, b is imaginary, and i^2 = -1.

---

## 2. Operations
- **Addition:** (a + bi) + (c + di) = (a + c) + (b + d)i
- **Multiplication:** (a + bi)(c + di) = (ac - bd) + (ad + bc)i
- **Conjugation:** a + bi → a - bi
- **Modulus:** |a + bi| = √(a^2 + b^2)

---

## 3. Applications
- **Engineering:** AC circuits, signal processing.
- **Physics:** Wave equations, quantum mechanics.
- **Mathematics:** Solving quadratic equations, fractals.

---

## 4. IB Exam Tips
- Practice arithmetic with complex numbers.
- Use conjugates to simplify fractions.
- Plot complex numbers on the Argand diagram.

---

## 5. Practice Problems
1. Add: (2 + 3i) + (4 - 2i)
2. Multiply: (1 + i)(2 - i)
3. Find modulus of 5 + 12i

---

## Summary
Complex numbers are essential for advanced problem solving and real-world applications.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Complex Numbers
- IB Past Papers
`,
      "Binomial theorem": `# Binomial Theorem

## Introduction
The binomial theorem provides a formula for expanding (a + b)^n using binomial coefficients.

---

## 1. Formula
(a + b)^n = Σ[k=0 to n] C(n, k) a^{n-k} b^k
Where C(n, k) = n! / [k!(n-k)!]

---

## 2. Pascal's Triangle
Binomial coefficients can be found using Pascal's triangle.

---

## 3. Applications
- **Probability:** Binomial distributions.
- **Algebra:** Expanding expressions.
- **Calculus:** Approximations.

---

## 4. IB Exam Tips
- Practice expanding binomials.
- Use binomial coefficients correctly.
- Apply theorem to probability problems.

---

## 5. Practice Problems
1. Expand (x + 2)^3
2. Find the coefficient of x^2 in (2 + x)^4
3. Use binomial theorem to approximate (1.01)^5

---

## Summary
The binomial theorem is a powerful tool for expansion and probability.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Binomial Theorem
- IB Past Papers
`
    },
    "Functions": {
      "Concept of a function": `# Concept of a Function

## Introduction
A function is a relation that assigns each input exactly one output. Functions are fundamental in mathematics and are used to model real-world relationships.

---

## 1. Definition
- **Function:** A rule that assigns each element in a set (domain) to exactly one element in another set (range).
- **Notation:** f(x) means the function f applied to x.

---

## 2. Domain and Range
- **Domain:** All possible input values.
- **Range:** All possible output values.

---

## 3. Graphs
Functions can be visualized as graphs. The shape of the graph reveals properties like intercepts, maxima, minima, and asymptotes.

---

## 4. Applications
- **Physics:** Speed over time.
- **Economics:** Cost functions.
- **Biology:** Population growth.

---

## 5. IB Exam Tips
- Always state the domain and range.
- Sketch graphs accurately.
- Use correct notation.

---

## 6. Practice Problems
1. State the domain and range of f(x) = x^2.
2. Sketch the graph of f(x) = 1/x.
3. Find f(3) if f(x) = 2x + 1.

---

## Summary
Understanding functions is key to success in IB Mathematics.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Functions
- IB Past Papers
`,
      "Types of functions": `# Types of Functions

## Introduction
There are many types of functions in mathematics, each with unique properties and graphs. Recognizing function types helps in solving equations and modeling data.

---

## 1. Linear Functions
- f(x) = mx + b
- Graph: straight line

## 2. Quadratic Functions
- f(x) = ax^2 + bx + c
- Graph: parabola

## 3. Polynomial Functions
- f(x) = a_nx^n + ... + a_0
- Graph: varies by degree

## 4. Rational Functions
- f(x) = p(x)/q(x)
- Graph: may have asymptotes

## 5. Exponential Functions
- f(x) = a^x
- Graph: rapid growth or decay

## 6. Trigonometric Functions
- f(x) = sin(x), cos(x), tan(x)
- Graph: periodic waves

---

## 7. Applications
- **Physics:** Motion, waves
- **Biology:** Growth models
- **Economics:** Cost, revenue

---

## 8. IB Exam Tips
- Identify function type before solving.
- Sketch graphs to visualize behavior.
- Use correct formulas for each type.

---

## 9. Practice Problems
1. Sketch f(x) = 2x + 3 and f(x) = x^2 - 4.
2. Identify the type of function: f(x) = 1/x.
3. Find the zeros of f(x) = x^2 - 5x + 6.

---

## Summary
Knowing function types is essential for IB Mathematics and real-world problem solving.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Types of Functions
- IB Past Papers
`,
      "Transformations": `# Transformations

## Introduction
Transformations change the position or shape of a graph. They help us understand how functions behave when modified.

---

## 1. Types of Transformations
- **Translation:** Shifting the graph up, down, left, or right.
- **Reflection:** Flipping the graph over an axis.
- **Stretching/Compressing:** Changing the graph's width or height.

---

## 2. Examples
- f(x) + c shifts up by c units.
- f(x - c) shifts right by c units.
- -f(x) reflects over the x-axis.
- f(-x) reflects over the y-axis.

---

## 3. Applications
- **Physics:** Modeling motion.
- **Engineering:** Signal processing.
- **Art:** Computer graphics.

---

## 4. IB Exam Tips
- Sketch graphs to visualize transformations.
- Label axes and points clearly.
- Practice with different types of transformations.

---

## 5. Practice Problems
1. Sketch f(x) = x^2 and f(x) = x^2 + 3.
2. Reflect f(x) = sin(x) over the x-axis.
3. Stretch f(x) = x^3 vertically by a factor of 2.

---

## Summary
Transformations are key for understanding and manipulating functions in IB Mathematics.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Transformations
- IB Past Papers
`,
      "Inverse, composite functions": `# Inverse and Composite Functions

## Introduction
Inverse and composite functions are important for solving equations and modeling processes in mathematics.

---

## 1. Inverse Functions
- **Definition:** The inverse function reverses the effect of the original function.
- **Notation:** f^(-1)(x)
- **Property:** f^(-1)(f(x)) = x

---

## 2. Composite Functions
- **Definition:** Combining two functions: (f ∘ g)(x) = f(g(x))
- **Order matters:** (f ∘ g)(x) ≠ (g ∘ f)(x)

---

## 3. Applications
- **Mathematics:** Solving equations, function transformations.
- **Science:** Modeling processes.
- **Engineering:** Control systems.

---

## 4. IB Exam Tips
- Practice finding inverses algebraically and graphically.
- Pay attention to the order in composite functions.
- Use correct notation.

---

## 5. Practice Problems
1. Find the inverse of f(x) = 2x + 3.
2. Compute (f ∘ g)(x) for f(x) = x^2, g(x) = x + 1.
3. Show that f^(-1)(f(x)) = x for f(x) = 3x - 4.

---

## Summary
Inverse and composite functions are essential for IB Mathematics and real-world modeling.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Inverse & Composite Functions
- IB Past Papers
`,
      "Exponential and logarithmic functions": `# Exponential and Logarithmic Functions

## Introduction
Exponential and logarithmic functions are closely related and are used to model growth, decay, and solve equations in mathematics and science.

---

## 1. Exponential Functions
- **Form:** f(x) = a^x
- **Properties:** Rapid growth or decay depending on the base a.
- **Applications:** Population growth, radioactive decay, compound interest.

---

## 2. Logarithmic Functions
- **Form:** f(x) = log_a(x)
- **Properties:** Inverse of exponential functions.
- **Applications:** Sound intensity, pH in chemistry, earthquake magnitude.

---

## 3. Graphs
- Exponential: Curve that increases or decreases rapidly.
- Logarithmic: Curve that increases slowly, passes through (1,0).

---

## 4. IB Exam Tips
- Know how to convert between exponential and logarithmic forms.
- Sketch and interpret graphs.
- Use properties to solve equations.

---

## 5. Practice Problems
1. Sketch f(x) = 2^x and f(x) = log_2(x).
2. Solve for x: 3^x = 81.
3. Find the domain of f(x) = log_5(x).

---

## Summary
Exponential and logarithmic functions are essential for IB Mathematics and real-world modeling.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Exponential & Logarithmic Functions
- IB Past Papers
`,
      "Trigonometric functions": `# Trigonometric Functions

## Introduction
Trigonometric functions relate angles to side lengths in right triangles. They are periodic and widely used in mathematics, physics, and engineering.

---

## 1. Sine, Cosine, Tangent
- **Sine (sin):** Opposite/Hypotenuse
- **Cosine (cos):** Adjacent/Hypotenuse
- **Tangent (tan):** Opposite/Adjacent

---

## 2. Graphs
- Sine and cosine: Wave-like, periodic.
- Tangent: Repeats with vertical asymptotes.

---

## 3. Applications
- **Physics:** Waves, oscillations.
- **Engineering:** Signal processing.
- **Math:** Solving triangles, modeling cycles.

---

## 4. IB Exam Tips
- Know key values and graphs.
- Use identities to simplify expressions.
- Practice solving trigonometric equations.

---

## 5. Practice Problems
1. Find sin(30°), cos(60°), tan(45°).
2. Sketch the graph of y = sin(x).
3. Solve for x: sin(x) = 0.5.

---

## Summary
Trigonometric functions are essential for IB Mathematics and many real-world applications.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Trigonometric Functions
- IB Past Papers
`
    },
    "Geometry and Trigonometry": {
      "Coordinate geometry": `# Coordinate Geometry

## Introduction
Coordinate geometry (also called analytic geometry) connects algebra and geometry by using coordinates and equations to represent geometric figures. It is essential for solving problems involving points, lines, and shapes on the Cartesian plane.

---

## 1. The Cartesian Plane
- **Axes:** The x-axis (horizontal) and y-axis (vertical) intersect at the origin (0,0).
- **Points:** Each point is represented by an ordered pair (x, y).

---

## 2. Distance Formula
To find the distance between two points A(x₁, y₁) and B(x₂, y₂):
- **Formula:** d = √[(x₂ - x₁)² + (y₂ - y₁)²]
- **Example:** Find the distance between (2,3) and (7,11).
  - d = √[(7-2)² + (11-3)²] = √[25 + 64] = √89 ≈ 9.43

---

## 3. Midpoint Formula
To find the midpoint M between A(x₁, y₁) and B(x₂, y₂):
- **Formula:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
- **Example:** Midpoint of (2,3) and (7,11) is ((2+7)/2, (3+11)/2) = (4.5, 7)

---

## 4. Equation of a Line
- **Slope (m):** m = (y₂ - y₁)/(x₂ - x₁)
- **Point-slope form:** y - y₁ = m(x - x₁)
- **Slope-intercept form:** y = mx + c
- **Example:** Find the equation of the line through (1,2) and (4,8).
  - m = (8-2)/(4-1) = 2
  - y - 2 = 2(x - 1) → y = 2x

---

## 5. Circles
- **Standard form:** (x - h)² + (y - k)² = r²
- Center: (h, k), Radius: r
- **Example:** Circle with center (3, -2) and radius 5: (x-3)² + (y+2)² = 25

---

## 6. Applications
- **Navigation:** GPS uses coordinates to locate positions.
- **Computer Graphics:** Drawing shapes and animations.
- **Physics:** Modeling motion and trajectories.

---

## 7. IB Exam Tips
- Label axes and points clearly.
- Show all working for formulas.
- Practice with past IB questions.

---

## 8. Practice Problems
1. Find the equation of the line passing through (2, -1) and (5, 7).
2. What is the distance between (0,0) and (6,8)?
3. Write the equation of a circle with center (0,0) and radius 4.

---

## Summary
Coordinate geometry is a powerful tool for solving geometric problems using algebraic methods.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Coordinate Geometry
- IB Past Papers
`,
      "Trigonometric ratios": `# Trigonometric Ratios

## Introduction
Trigonometric ratios (sine, cosine, tangent) relate the angles of a right triangle to the lengths of its sides. They are essential for solving problems in geometry, physics, and engineering.

---

## 1. Definitions
- **Sine (sin θ):** Opposite / Hypotenuse
- **Cosine (cos θ):** Adjacent / Hypotenuse
- **Tangent (tan θ):** Opposite / Adjacent

---

## 2. Right Triangle Example
Consider a right triangle with:
- Angle θ
- Opposite side = 3
- Adjacent side = 4
- Hypotenuse = 5

- sin θ = 3/5 = 0.6
- cos θ = 4/5 = 0.8
- tan θ = 3/4 = 0.75

---

## 3. Applications
- **Geometry:** Finding unknown sides or angles.
- **Physics:** Calculating forces, waves.
- **Engineering:** Designing ramps, structures.

---

## 4. IB Exam Tips
- Draw and label triangles.
- Use correct ratios for calculations.
- Practice with word problems and diagrams.

---

## 5. Practice Problems
1. In a right triangle, if the opposite side is 8 and the hypotenuse is 10, find sin θ.
2. Find the length of the adjacent side if tan θ = 0.5 and opposite = 6.
3. What is cos θ if adjacent = 12 and hypotenuse = 13?

---

## Summary
Trigonometric ratios are key for solving right triangle problems and modeling real-world situations.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Trigonometry
- IB Past Papers
`,
      "Trigonometric equations": `# Trigonometric Equations

## Introduction
Trigonometric equations involve finding the angles or side lengths of triangles using trigonometric ratios and identities. They are used in geometry, physics, and engineering.

---

## 1. Basic Trigonometric Equations
- sin θ = Opposite / Hypotenuse
- cos θ = Adjacent / Hypotenuse
- tan θ = Opposite / Adjacent

---

## 2. Solving Right Triangle Problems
To find an angle given two sides:
- Use inverse trigonometric functions: θ = sin⁻¹(opposite/hypotenuse), cos⁻¹(adjacent/hypotenuse), tan⁻¹(opposite/adjacent).

---

## 3. Applications
- **Geometry:** Solving triangles, finding angles and sides.
- **Physics:** Analyzing forces, waves, and oscillations.
- **Engineering:** Designing and analyzing structures and systems.

---

## 4. IB Exam Tips
- Draw clear diagrams and label all parts.
- Show all steps in your calculations.
- Check that your answer is reasonable.

---

## 5. Practice Problems
1. In a right triangle, if the opposite side is 5 and the hypotenuse is 13, find sin θ.
2. If cos θ = 0.6 and the adjacent side is 12, what is the length of the hypotenuse?
3. Solve for θ: tan θ = 3/4.

---

## Summary
Trigonometric equations are essential for solving problems involving triangles and modeling periodic phenomena.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Trigonometric Equations
- IB Past Papers
`,
      "Vectors": `# Vectors

## Introduction
Vectors are quantities that have both magnitude and direction. They are used to represent physical quantities like force, velocity, and displacement.

---

## 1. Vector Representation
- A vector is represented by an arrow: the length represents the magnitude, and the arrowhead indicates the direction.
- In coordinates, a vector can be represented as **v** = (v₁, v₂), where v₁ and v₂ are the components in the x and y directions, respectively.

---

## 2. Vector Operations
- **Addition:** To add two vectors, add their corresponding components: **u** + **v** = (u₁ + v₁, u₂ + v₂).
- **Scalar multiplication:** To multiply a vector by a scalar, multiply each component by the scalar: k**v** = (kv₁, kv₂).

---

## 3. Dot Product
- The dot product of two vectors **u** = (u₁, u₂) and **v** = (v₁, v₂) is given by: **u** · **v** = u₁v₁ + u₂v₂.
- It represents the product of the magnitudes of the two vectors and the cosine of the angle between them.

---

## 4. Cross Product
- The cross product of two vectors **u** = (u₁, u₂, u₃) and **v** = (v₁, v₂, v₃) is a vector **w** = **u** × **v** that is perpendicular to both **u** and **v**.
- Its magnitude is given by: |**w**| = |**u**||**v**|sin(θ), where θ is the angle between **u** and **v**.

---

## 5. Applications
- **Physics:** Representing forces, velocities, and accelerations.
- **Engineering:** Analyzing forces in structures, designing mechanical components.
- **Computer Graphics:** Modeling and rendering 2D and 3D objects.

---

## 6. IB Exam Tips
- Pay attention to the direction of vectors; use arrows to indicate direction.
- Break vectors into components when adding or subtracting.
- Use the dot product and cross product formulas correctly.

---

## 7. Practice Problems
1. If **u** = (3, 4) and **v** = (1, 2), find **u** + **v** and 2**u**.
2. Find the dot product of **u** = (3, -5, 2) and **v** = (4, 0, -1).
3. If **u** = (2, 3, 1) and **v** = (1, -1, 2), find **u** × **v**.

---

## Summary
Vectors are fundamental in mathematics and physics for representing and analyzing quantities with direction and magnitude.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Vectors
- IB Past Papers
`,
      "Proofs": `# Proofs

## Introduction
Proofs are logical arguments that demonstrate the truth of mathematical statements. They are essential for validating results and theorems in mathematics.

---

## 1. Direct Proof
- A direct proof establishes the truth of a statement by a straightforward chain of logical deductions.
- Example: To prove that the sum of two even numbers is even, let a and b be even. Then a = 2m and b = 2n for some integers m and n. Thus, a + b = 2m + 2n = 2(m + n), which is even.

---

## 2. Proof by Contradiction
- In this method, you assume that the statement you want to prove is false, and show that this assumption leads to a contradiction.
- Example: To prove that √2 is irrational, assume the opposite: √2 is rational. Then it can be expressed as p/q, where p and q are integers with no common factors. Squaring both sides gives 2 = p²/q², so p² = 2q². This implies p² is even, and hence p is even. Let p = 2k. Substituting back gives 2k² = q², so q² is even, and q is even. But then p and q have 2 as a common factor, contradicting the assumption that they have no common factors. Hence, √2 is irrational.

---

## 3. Mathematical Induction
- Induction is used to prove statements about integers. It consists of two steps: the base case and the inductive step.
- Example: To prove that the sum of the first n odd numbers is n², first show it's true for n = 1 (base case). Then, assume it's true for n = k (inductive hypothesis), and prove it for n = k + 1. The sum of the first k + 1 odd numbers is (2k + 1) + (k²) = k² + 2k + 1 = (k + 1)², which completes the inductive step.

---

## 4. Applications
- **Mathematics:** Establishing the validity of theorems and formulas.
- **Computer Science:** Proving the correctness of algorithms.
- **Engineering:** Validating models and simulations.

---

## 5. IB Exam Tips
- Read proofs carefully to understand the logical flow.
- Practice writing clear and concise proofs.
- Familiarize yourself with common proof techniques.

---

## 6. Practice Problems
1. Prove that the sum of two odd numbers is even.
2. Prove by contradiction that if n² is even, then n is even.
3. Use mathematical induction to prove that 1 + 2 + ... + n = n(n + 1)/2.

---

## Summary
Proofs are a fundamental aspect of mathematics, providing certainty and understanding of mathematical concepts and relationships.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Proofs
- IB Past Papers
`
    },
    "Statistics and Probability": {
      "Descriptive statistics": `# Descriptive Statistics

## Introduction
Descriptive statistics summarize and describe the main features of a data set. They help us understand data by calculating measures of central tendency, spread, and visualizing data distributions.

---

## 1. Measures of Central Tendency
- **Mean:** The average value.
- **Median:** The middle value when data is ordered.
- **Mode:** The most frequent value.

---

## 2. Measures of Spread
- **Range:** Difference between highest and lowest values.
- **Interquartile Range (IQR):** Range of the middle 50% of data.
- **Standard Deviation:** Measures how spread out data is from the mean.

---

## 3. Graphical Representations
- **Histogram:** Shows frequency of data in intervals.
- **Box Plot:** Displays median, quartiles, and outliers.
- **Bar Chart:** Compares categories.

---

## 4. Applications
- **Research:** Summarizing survey results.
- **Business:** Analyzing sales data.
- **Science:** Understanding experimental results.

---

## 5. IB Exam Tips
- Label axes and units on graphs.
- Show calculations for mean, median, mode, and standard deviation.
- Interpret graphs and data summaries.

---

## 6. Practice Problems
1. Find the mean, median, and mode of [2, 4, 4, 7, 9].
2. Draw a box plot for the data set [5, 7, 8, 10, 12, 15].
3. Calculate the standard deviation for [3, 6, 6, 9].

---

## Summary
Descriptive statistics are essential for understanding and communicating data.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Descriptive Statistics
- IB Past Papers
`,
      "Probability concepts": `# Probability Concepts

## Introduction
Probability measures the likelihood of events occurring. It is used to analyze random phenomena and make predictions in games, science, and everyday life.

---

## 1. Key Terms
- **Sample Space:** All possible outcomes.
- **Event:** A subset of the sample space.
- **Probability:** P(A) = Number of favorable outcomes / Total outcomes.

---

## 2. Types of Events
- **Independent Events:** One event does not affect the other.
- **Dependent Events:** One event affects the probability of another.
- **Mutually Exclusive:** Events cannot happen at the same time.

---

## 3. Conditional Probability
- **Formula:** P(A|B) = P(A and B) / P(B)
- **Example:** Probability of drawing an ace given a red card was drawn.

---

## 4. Applications
- **Games:** Calculating odds in cards or dice.
- **Risk Assessment:** Insurance, finance.
- **Statistics:** Predicting outcomes.

---

## 5. IB Exam Tips
- Define sample space clearly.
- Use correct formulas for probability.
- Show all working and reasoning.

---

## 6. Practice Problems
1. What is the probability of rolling a 6 on a fair die?
2. If a card is drawn from a deck, what is the probability it is a heart?
3. Two coins are tossed. What is the probability both show heads?

---

## Summary
Probability concepts help us analyze uncertainty and make informed decisions.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Probability
- IB Past Papers
`,
      "Discrete and continuous random variables": `# Discrete and Continuous Random Variables

## Introduction
Random variables represent outcomes of random processes. Discrete random variables take specific values, while continuous random variables can take any value within a range.

---

## 1. Discrete Random Variables
- **Definition:** Can only take distinct, separate values (e.g., number of students).
- **Probability Distribution:** Lists probabilities for each value.
- **Example:** Rolling a die (values: 1, 2, 3, 4, 5, 6).

---

## 2. Continuous Random Variables
- **Definition:** Can take any value within an interval (e.g., height, time).
- **Probability Density Function (PDF):** Describes likelihood of values in a range.
- **Example:** Measuring rainfall in centimeters.

---

## 3. Applications
- **Statistics:** Modeling test scores, measurements.
- **Science:** Analyzing physical quantities.
- **Economics:** Predicting prices, demand.

---

## 4. IB Exam Tips
- Identify if a variable is discrete or continuous.
- Use correct notation for distributions.
- Interpret probability tables and graphs.

---

## 5. Practice Problems
1. List the possible values for the number of heads in 3 coin tosses.
2. Is height a discrete or continuous variable?
3. Sketch a probability distribution for rolling a die.

---

## Summary
Understanding random variables is key for analyzing data and probability.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Random Variables
- IB Past Papers
`,
      "Normal distribution": `# Normal Distribution

## Introduction
The normal distribution is a bell-shaped curve that describes many natural phenomena. It is defined by its mean and standard deviation and is used in statistics and research.

---

## 1. Properties
- **Symmetrical:** Mean, median, and mode are equal.
- **Empirical Rule:** 68% of data within 1 SD, 95% within 2 SD, 99.7% within 3 SD.
- **Standard Normal Distribution:** Mean = 0, SD = 1.

---

## 2. Applications
- **Statistics:** Analyzing test scores, heights, IQ.
- **Science:** Measurement errors, natural phenomena.
- **Business:** Quality control, forecasting.

---

## 3. IB Exam Tips
- Sketch and label normal curves.
- Use z-scores to find probabilities.
- Interpret mean and standard deviation.

---

## 4. Practice Problems
1. What percentage of data falls within 2 SD of the mean?
2. If mean = 100, SD = 15, what is the z-score for 130?
3. Sketch a normal curve and label mean and SD.

---

## Summary
The normal distribution is fundamental for analyzing and interpreting data in IB Mathematics.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Normal Distribution
- IB Past Papers
`,
    },
    "Calculus": {
      "Limits": `# Limits

## Introduction
Limits describe the behavior of a function as its input approaches a particular value. They are foundational for calculus, helping define derivatives and integrals.

---

## 1. Definition
- **Limit:** The value that f(x) approaches as x approaches a.
- **Notation:** limₓ→ₐ f(x)

---

## 2. Techniques for Finding Limits
- **Direct Substitution:** Plug in the value of x.
- **Factoring:** Factor and simplify before substituting.
- **Rationalization:** Multiply by a conjugate to simplify.
- **L'Hôpital's Rule:** Use derivatives for indeterminate forms (0/0, ∞/∞).

---

## 3. One-Sided Limits
- **Left-hand limit:** limₓ→ₐ⁻ f(x)
- **Right-hand limit:** limₓ→ₐ⁺ f(x)

---

## 4. Applications
- **Defining derivatives and integrals.**
- **Analyzing continuity and discontinuity.**
- **Modeling instantaneous rates of change.**

---

## 5. IB Exam Tips
- Show all working and steps.
- State if the limit does not exist.
- Practice with piecewise and rational functions.

---

## 6. Practice Problems
1. Find limₓ→2 (x² - 4)/(x - 2).
2. Evaluate limₓ→0 (sin x)/x.
3. Find the left and right limits of f(x) = |x| at x = 0.

---

## Summary
Limits are essential for understanding change and continuity in mathematics.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Limits
- IB Past Papers
`,
      "Differentiation": `# Differentiation

## Introduction
Differentiation finds the rate at which a function changes. It is used to calculate slopes, velocities, and optimize systems in mathematics, science, and engineering.

---

## 1. Definition
- **Derivative:** Measures the rate of change of a function.
- **Notation:** f'(x), dy/dx

---

## 2. Rules of Differentiation
- **Power Rule:** d/dx[xⁿ] = n xⁿ⁻¹
- **Product Rule:** d/dx[uv] = u'v + uv'
- **Quotient Rule:** d/dx[u/v] = (u'v - uv')/v²
- **Chain Rule:** d/dx[f(g(x))] = f'(g(x)) g'(x)

---

## 3. Applications
- **Physics:** Velocity, acceleration.
- **Optimization:** Maximizing or minimizing functions.
- **Economics:** Marginal cost and revenue.

---

## 4. IB Exam Tips
- Show all steps and use correct notation.
- Practice with polynomial, trigonometric, and exponential functions.
- Interpret the meaning of the derivative in context.

---

## 5. Practice Problems
1. Differentiate f(x) = x³ + 2x² - 5x.
2. Find the derivative of y = sin x.
3. Use the chain rule to differentiate y = (3x² + 1)⁴.

---

## Summary
Differentiation is a powerful tool for analyzing change and solving real-world problems.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Differentiation
- IB Past Papers
`,
      "Integration": `# Integration

## Introduction
Integration calculates the area under a curve and accumulates quantities. It is used in mathematics, physics, engineering, and economics.

---

## 1. Definition
- **Integral:** The accumulation of quantities, area under a curve.
- **Notation:** ∫ f(x) dx

---

## 2. Techniques of Integration
- **Substitution:** Change of variable to simplify.
- **Integration by Parts:** ∫ u dv = uv - ∫ v du
- **Partial Fractions:** Break complex fractions into simpler parts.

---

## 3. Definite and Indefinite Integrals
- **Indefinite Integral:** General form, includes constant of integration (C).
- **Definite Integral:** Evaluated over an interval [a, b].

---

## 4. Applications
- **Physics:** Calculating distance, work, energy.
- **Probability:** Finding probabilities from density functions.
- **Economics:** Total cost, revenue.

---

## 5. IB Exam Tips
- Show all steps and use correct notation.
- Practice with polynomial, trigonometric, and exponential functions.
- Interpret the meaning of the integral in context.

---

## 6. Practice Problems
1. Integrate f(x) = 2x + 3.
2. Find the area under y = x² from x = 0 to x = 2.
3. Use substitution to integrate ∫ (2x)(x² + 1) dx.

---

## Summary
Integration is essential for solving problems involving accumulation and area.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Integration
- IB Past Papers
`,
      "Applications of calculus": `# Applications of Calculus

## Introduction
Calculus is used to model and solve problems involving change, motion, and optimization in physics, engineering, economics, and biology.

---

## 1. Motion and Rates of Change
- **Velocity and Acceleration:** Derivatives describe how position changes over time.
- **Growth and Decay:** Exponential models use calculus to describe change.

---

## 2. Optimization
- **Maxima and Minima:** Find the highest or lowest values of functions.
- **Critical Points:** Where the derivative is zero or undefined.

---

## 3. Area and Accumulation
- **Area Under Curves:** Integration calculates total quantities.
- **Physics:** Work, energy, and force.

---

## 4. IB Exam Tips
- Interpret results in context.
- Use calculus to solve real-world problems.
- Practice with word problems and applications.

---

## 5. Practice Problems
1. Find the maximum value of f(x) = -x² + 4x + 1.
2. Calculate the total distance traveled given v(t) = 3t².
3. Use calculus to find the area between two curves.

---

## Summary
Calculus is a versatile tool for modeling and solving problems in many fields.

---

## Further Reading
- IB Mathematics Textbook
- Khan Academy: Calculus Applications
- IB Past Papers
`
    }
  },
  Biology: {
    "Genetics": {
      "Genes and chromosomes": `# Genes and Chromosomes

## Introduction
Genes are segments of DNA that code for proteins, while chromosomes are structures that organize and carry genetic information in cells.

---

## 1. Genes
- **Definition:** A gene is a sequence of DNA that codes for a specific protein.
- **Alleles:** Different forms of a gene.
- **Locus:** The position of a gene on a chromosome.

---

## 2. Chromosomes
- **Structure:** DNA wrapped around proteins (histones) forming chromatin.
- **Types:** Autosomes (non-sex chromosomes) and sex chromosomes (X, Y).
- **Humans:** 46 chromosomes (23 pairs).

---

## 3. IB Exam Tips
- Know definitions of gene, allele, locus, chromosome.
- Be able to draw and label chromosomes.

---

## 4. Practice Problems
1. Define gene, allele, and locus.
2. How many chromosomes do humans have?
3. Draw a labeled chromosome.

---

## Summary
Genes and chromosomes are the basis of heredity and genetic variation.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Genes & Chromosomes
- IB Past Papers
`,
      "DNA and genes": `# DNA and Genes

## Introduction
DNA contains genes, which are instructions for building proteins. The relationship between DNA and genes is central to genetics.

---

## 1. DNA Structure
- **Double Helix:** Two strands of nucleotides.
- **Bases:** A, T, C, G.

---

## 2. Genes
- **Coding Regions:** Parts of DNA that code for proteins.
- **Non-coding Regions:** Do not code for proteins but may regulate gene expression.

---

## 3. IB Exam Tips
- Know the difference between coding and non-coding DNA.
- Be able to explain how genes are found on DNA.

---

## 4. Practice Problems
1. What is a gene?
2. What is the difference between coding and non-coding DNA?
3. Draw a gene on a DNA strand.

---

## Summary
Genes are segments of DNA that determine traits and functions in organisms.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: DNA & Genes
- IB Past Papers
`,
      "Inheritance": `# Inheritance

## Introduction
Inheritance is the process by which genetic information is passed from parents to offspring. It explains how traits are transmitted and why variation occurs.

---

## 1. Mendelian Inheritance
- **Dominant and Recessive Alleles:** Dominant alleles mask recessive ones.
- **Genotype:** Genetic makeup (e.g., AA, Aa, aa).
- **Phenotype:** Observable traits.
- **Punnett Squares:** Used to predict inheritance patterns.

---

## 2. Non-Mendelian Inheritance
- **Codominance:** Both alleles are expressed.
- **Incomplete Dominance:** Blending of traits.
- **Multiple Alleles:** More than two alleles for a gene.

---

## 3. IB Exam Tips
- Practice Punnett squares.
- Know definitions of genotype and phenotype.
- Understand examples of non-Mendelian inheritance.

---

## 4. Practice Problems
1. Complete a Punnett square for a monohybrid cross.
2. Give an example of codominance.
3. Define genotype and phenotype.

---

## Summary
Inheritance explains how traits are passed and why offspring differ from parents.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Inheritance
- IB Past Papers
`,
      "Genetic variation and mutation": `# Genetic Variation and Mutation

## Introduction
Genetic variation is the diversity in gene frequencies, while mutations are changes in DNA that create new alleles and increase variation.

---

## 1. Sources of Variation
- **Mutation:** Random changes in DNA.
- **Meiosis:** Crossing over and independent assortment.
- **Fertilization:** Combines genes from two parents.

---

## 2. Types of Mutation
- **Point Mutation:** Change in a single base.
- **Insertion/Deletion:** Addition or loss of bases.
- **Chromosomal Mutation:** Changes in chromosome structure or number.

---

## 3. IB Exam Tips
- Know examples of mutations.
- Explain how meiosis increases variation.
- Relate mutation to evolution.

---

## 4. Practice Problems
1. Define mutation and give an example.
2. Explain how crossing over creates variation.
3. Describe a chromosomal mutation.

---

## Summary
Genetic variation and mutation are essential for evolution and adaptation.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Genetic Variation & Mutation
- IB Past Papers
`
    },
    "Molecular Biology": {
      "DNA structure and replication": `# DNA Structure and Replication

## Introduction
DNA (deoxyribonucleic acid) is the molecule that stores genetic information in living organisms. Its structure and ability to replicate are fundamental to heredity and cell division.

---

## 1. DNA Structure
- **Double Helix:** Two strands twisted into a double helix.
- **Sugar-Phosphate Backbone:** Forms the sides of the helix.
- **Nitrogenous Bases:** Adenine (A), Thymine (T), Cytosine (C), Guanine (G).
- **Base Pairing:** A pairs with T, C pairs with G via hydrogen bonds.

---

## 2. DNA Replication
- **Semi-Conservative:** Each new DNA molecule has one old and one new strand.
- **Steps:**
  - Helicase unwinds the DNA.
  - Free nucleotides pair with exposed bases.
  - DNA polymerase joins nucleotides to form new strands.
  - Ligase joins fragments on the lagging strand.

---

## 3. Enzymes Involved
- **Helicase:** Unwinds DNA.
- **DNA Polymerase:** Synthesizes new DNA.
- **Ligase:** Joins Okazaki fragments.

---

## 4. IB Exam Tips
- Draw and label a DNA molecule.
- Explain base pairing and the double helix.
- Know the steps and enzymes in replication.
- Explain semi-conservative replication.

---

## 5. Practice Problems
1. Draw a labeled diagram of DNA.
2. List the enzymes involved in DNA replication and their functions.
3. Explain why replication is semi-conservative.

---

## Summary
DNA’s structure enables it to store and transmit genetic information, and replication ensures genetic continuity.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: DNA Structure & Replication
- IB Past Papers
`,
      "DNA structure": `# DNA Structure

## Introduction
DNA (deoxyribonucleic acid) is the molecule that stores genetic information in living organisms. Its structure is key to its function in heredity and protein synthesis.

---

## 1. Double Helix
- **Shape:** Two strands twisted into a double helix.
- **Backbone:** Sugar-phosphate backbone on the outside.
- **Bases:** Adenine (A), Thymine (T), Cytosine (C), Guanine (G).
- **Base Pairing:** A pairs with T, C pairs with G (hydrogen bonds).

---

## 2. Function
- **Genetic Code:** Sequence of bases encodes instructions for proteins.
- **Replication:** DNA can copy itself for cell division.

---

## 3. IB Exam Tips
- Draw and label a DNA molecule.
- Explain base pairing and the double helix.
- Relate structure to function.

---

## 4. Practice Problems
1. Draw a labeled diagram of DNA.
2. Explain why A pairs with T and C with G.
3. Describe the role of the sugar-phosphate backbone.

---

## Summary
DNA’s structure enables it to store and transmit genetic information.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: DNA Structure
- IB Past Papers
`,
      "DNA replication": `# DNA Replication

## Introduction
DNA replication is the process by which a cell copies its DNA before cell division. It ensures genetic continuity between generations.

---

## 1. Steps of Replication
- **Unwinding:** Helicase enzyme separates the two DNA strands.
- **Base Pairing:** Free nucleotides pair with exposed bases.
- **Synthesis:** DNA polymerase joins nucleotides to form new strands.
- **Semi-Conservative:** Each new DNA molecule has one old and one new strand.

---

## 2. Enzymes Involved
- **Helicase:** Unwinds DNA.
- **DNA Polymerase:** Synthesizes new DNA.
- **Ligase:** Joins fragments on the lagging strand.

---

## 3. IB Exam Tips
- Know the steps and enzymes involved.
- Explain semi-conservative replication.
- Draw and label diagrams of replication.

---

## 4. Practice Problems
1. List the enzymes involved in DNA replication and their functions.
2. Explain why replication is semi-conservative.
3. Draw a diagram showing DNA replication.

---

## Summary
DNA replication ensures accurate transmission of genetic information during cell division.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: DNA Replication
- IB Past Papers
`,
      "Molecules to metabolism": `# Molecules to Metabolism

## Introduction
Molecular biology explores the chemical basis of life, focusing on the structure and function of biological molecules and their role in metabolism. This subtopic covers the types of molecules found in living organisms and how they interact in metabolic pathways.

---

## 1. Types of Biological Molecules
- **Carbohydrates:** Provide energy and structural support (e.g., glucose, cellulose).
- **Lipids:** Store energy, form membranes, act as signaling molecules (e.g., fats, phospholipids).
- **Proteins:** Catalyze reactions, provide structure, transport, and regulation (e.g., enzymes, hemoglobin).
- **Nucleic Acids:** Store and transmit genetic information (DNA, RNA).

---

## 2. Metabolism
- **Metabolism:** The sum of all chemical reactions in a cell.
- **Catabolism:** Breakdown of molecules to release energy.
- **Anabolism:** Synthesis of complex molecules from simpler ones.

---

## 3. Enzymes
- **Enzymes:** Biological catalysts that speed up reactions.
- **Active Site:** Region where substrate binds.
- **Specificity:** Each enzyme acts on a specific substrate.

---

## 4. IB Exam Tips
- Know the functions of each molecule type.
- Understand enzyme action and specificity.
- Distinguish between catabolic and anabolic pathways.

---

## 5. Practice Problems
1. List the main types of biological molecules and their functions.
2. Explain the difference between catabolism and anabolism.
3. Describe how enzymes work.

---

## Summary
Molecular biology links chemistry and biology, explaining how molecules interact to sustain life.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Biomolecules
- IB Past Papers
`,
      "Water": `# Water

## Introduction
Water is essential for life. Its unique properties make it vital for biological processes, including metabolism, transport, and temperature regulation.

---

## 1. Structure and Properties
- **Polarity:** Water molecules have a partial positive and negative charge, making them polar.
- **Hydrogen Bonding:** Leads to cohesion, adhesion, and high specific heat.

---

## 2. Biological Importance
- **Solvent:** Dissolves many substances, enabling chemical reactions.
- **Transport:** Moves nutrients and waste in organisms.
- **Temperature Regulation:** High specific heat stabilizes environments.

---

## 3. IB Exam Tips
- Explain hydrogen bonding and its effects.
- Relate water’s properties to its biological roles.

---

## 4. Practice Problems
1. Describe how water’s polarity affects its properties.
2. Explain why water is a good solvent.
3. How does water help regulate temperature?

---

## Summary
Water’s properties are fundamental to life and metabolism.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Water and Life
- IB Past Papers
`,
      "Carbohydrates and lipids": `# Carbohydrates and Lipids

## Introduction
Carbohydrates and lipids are key molecules in metabolism, providing energy and structural components for cells.

---

## 1. Carbohydrates
- **Monosaccharides:** Simple sugars (e.g., glucose, fructose).
- **Disaccharides:** Two monosaccharides joined (e.g., sucrose).
- **Polysaccharides:** Long chains (e.g., starch, cellulose).
- **Functions:** Energy source, storage, structure.

---

## 2. Lipids
- **Fatty Acids:** Building blocks of lipids.
- **Triglycerides:** Main energy storage molecules.
- **Phospholipids:** Form cell membranes.
- **Functions:** Energy storage, insulation, protection.

---

## 3. IB Exam Tips
- Know the structure and function of carbohydrates and lipids.
- Be able to distinguish between types of carbohydrates.
- Understand lipid roles in cells.

---

## 4. Practice Problems
1. Compare monosaccharides, disaccharides, and polysaccharides.
2. Describe the role of lipids in cell membranes.
3. Explain how carbohydrates and lipids are used for energy.

---

## Summary
Carbohydrates and lipids are essential for energy and cell structure.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Carbohydrates & Lipids
- IB Past Papers
`,
      "Proteins": `# Proteins

## Introduction
Proteins are complex molecules that perform a wide range of functions in living organisms, including catalysis, transport, and structure.

---

## 1. Structure
- **Amino Acids:** Building blocks of proteins.
- **Polypeptides:** Chains of amino acids.
- **Levels of Structure:** Primary, secondary, tertiary, quaternary.

---

## 2. Functions
- **Enzymes:** Speed up chemical reactions.
- **Transport:** Move substances (e.g., hemoglobin).
- **Structure:** Provide support (e.g., collagen).
- **Regulation:** Control processes (e.g., hormones).

---

## 3. IB Exam Tips
- Know the levels of protein structure.
- Understand enzyme function and specificity.
- Relate protein structure to function.

---

## 4. Practice Problems
1. List the levels of protein structure.
2. Explain how enzymes work.
3. Describe the role of proteins in transport.

---

## Summary
Proteins are vital for structure, function, and regulation in cells.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Proteins
- IB Past Papers
`,
      "Enzymes": `# Enzymes

## Introduction
Enzymes are biological catalysts that speed up chemical reactions in cells. They are essential for metabolism and life.

---

## 1. How Enzymes Work
- **Active Site:** Region where substrate binds.
- **Specificity:** Each enzyme acts on a specific substrate.
- **Induced Fit:** Enzyme changes shape to fit substrate.

---

## 2. Factors Affecting Enzyme Activity
- **Temperature:** Affects reaction rate.
- **pH:** Influences enzyme shape and function.
- **Substrate Concentration:** More substrate can increase rate up to a point.

---

## 3. IB Exam Tips
- Explain enzyme specificity and induced fit.
- Know how temperature and pH affect enzymes.
- Interpret enzyme graphs.

---

## 4. Practice Problems
1. Describe the induced fit model.
2. Explain how pH affects enzyme activity.
3. Interpret a graph of enzyme activity vs. temperature.

---

## Summary
Enzymes are crucial for controlling metabolic reactions in cells.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Enzymes
- IB Past Papers
`
    },
    "Cell Biology": {
      "Cell structure": `# Cell Structure

## Introduction
Cell structure refers to the organization of cellular components that carry out life processes. Understanding cell structure is fundamental to biology and medicine.

---

## 1. Major Cell Components
- **Nucleus:** Contains genetic material (DNA), controls cell activities.
- **Mitochondria:** Powerhouse of the cell, produces energy (ATP).
- **Ribosomes:** Synthesize proteins.
- **Endoplasmic Reticulum (ER):** Rough ER (with ribosomes) makes proteins; Smooth ER makes lipids.
- **Golgi Apparatus:** Modifies, sorts, and packages proteins and lipids.
- **Cell Membrane:** Controls entry/exit of substances, protects cell.
- **Cytoplasm:** Jelly-like fluid where reactions occur.
- **Lysosomes:** Break down waste and cellular debris.
- **Chloroplasts (plants):** Site of photosynthesis.

---

## 2. Cell Types
- **Prokaryotic Cells:** No nucleus (e.g., bacteria).
- **Eukaryotic Cells:** Have a nucleus (e.g., plants, animals).

---

## 3. Applications
- **Medicine:** Understanding diseases at the cellular level.
- **Genetics:** Studying inheritance and mutations.
- **Biotechnology:** Genetic engineering, cloning.

---

## 4. IB Exam Tips
- Draw and label cell diagrams.
- Know functions of each organelle.
- Compare prokaryotic and eukaryotic cells.

---

## 5. Practice Problems
1. Label a diagram of a typical animal cell.
2. List three differences between prokaryotic and eukaryotic cells.
3. What is the function of mitochondria?

---

## Summary
Cell structure is the foundation for understanding life and biological processes.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Cell Structure
- IB Past Papers
`,
      "Membrane structure": `# Membrane Structure

## Introduction
Cell membranes are dynamic barriers that regulate transport, communication, and protection. The fluid mosaic model describes their structure and function.

---

## 1. Components
- **Phospholipid Bilayer:** Double layer with hydrophilic heads and hydrophobic tails.
- **Proteins:** Embedded for transport, signaling, and structure.
- **Cholesterol:** Maintains fluidity and stability.
- **Carbohydrates:** Cell recognition and signaling.

---

## 2. Fluid Mosaic Model
- Membrane is flexible, components move laterally.
- Proteins float in or on the bilayer.

---

## 3. Transport Across Membranes
- **Passive Transport:** Diffusion, osmosis (no energy required).
- **Active Transport:** Uses energy (ATP) to move substances against gradient.
- **Facilitated Diffusion:** Uses proteins to help substances cross.

---

## 4. Applications
- **Medicine:** Drug delivery, immune response.
- **Biotechnology:** Designing artificial membranes.

---

## 5. IB Exam Tips
- Draw and label membrane diagrams.
- Explain fluid mosaic model.
- Distinguish between types of transport.

---

## 6. Practice Problems
1. Draw and label a phospholipid bilayer.
2. Explain the difference between active and passive transport.
3. What is the role of cholesterol in membranes?

---

## Summary
Membrane structure is key for cell function, communication, and homeostasis.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Membranes
- IB Past Papers
`,
      "Cell division": `# Cell Division

## Introduction
Cell division is the process by which cells reproduce. It is essential for growth, repair, and reproduction in living organisms.

---

## 1. Types of Cell Division
- **Mitosis:** Produces two identical daughter cells for growth and repair.
- **Meiosis:** Produces gametes (sperm/egg) for sexual reproduction; results in genetic diversity.

---

## 2. Stages of Mitosis
- **Prophase:** Chromosomes condense, spindle forms.
- **Metaphase:** Chromosomes align at cell center.
- **Anaphase:** Chromatids separate to opposite poles.
- **Telophase:** Nuclear membranes reform, cell splits (cytokinesis).

---

## 3. Applications
- **Medicine:** Cancer research, regenerative medicine.
- **Genetics:** Understanding inheritance.
- **Agriculture:** Plant breeding.

---

## 4. IB Exam Tips
- Draw and label stages of mitosis and meiosis.
- Compare mitosis and meiosis.
- Know the significance of cell division.

---

## 5. Practice Problems
1. List the stages of mitosis in order.
2. What is the difference between mitosis and meiosis?
3. Why is cell division important for multicellular organisms?

---

## Summary
Cell division is vital for life, growth, and genetic continuity.

---

## Further Reading
- IB Biology Textbook
- Khan Academy: Cell Division
- IB Past Papers
`
    }
  },
  Chemistry: {
    "Atomic Structure": {
      "Subatomic particles": `# Subatomic Particles

## Introduction
Atoms are made of three main subatomic particles: protons, neutrons, and electrons. Their arrangement determines the properties of elements.

---

## 1. Protons
- **Charge:** Positive (+1)
- **Location:** Nucleus
- **Role:** Determines atomic number and element identity

---

## 2. Neutrons
- **Charge:** Neutral (0)
- **Location:** Nucleus
- **Role:** Adds mass, affects isotope stability

---

## 3. Electrons
- **Charge:** Negative (-1)
- **Location:** Orbitals/shells around nucleus
- **Role:** Involved in chemical bonding and reactions

---

## 4. IB Exam Tips
- Know charges and locations of each particle
- Be able to draw and label an atom

---

## 5. Practice Problems
1. Draw a labeled atom
2. What determines the element’s identity?
3. How do neutrons affect isotopes?

---

## Summary
Subatomic particles form the basis of atomic structure and chemical properties.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Atoms
- IB Past Papers
`,
      "Isotopes": `# Isotopes

## Introduction
Isotopes are atoms of the same element with different numbers of neutrons. They have similar chemical properties but different physical properties.

---

## 1. Definition
- **Isotope:** Same number of protons, different number of neutrons
- **Example:** Carbon-12 and Carbon-14

---

## 2. Properties
- **Chemical:** Same for all isotopes of an element
- **Physical:** Mass, stability, radioactivity may differ

---

## 3. Applications
- **Radiometric dating**
- **Medical imaging**

---

## 4. IB Exam Tips
- Know examples of isotopes
- Explain differences in properties

---

## 5. Practice Problems
1. What is an isotope?
2. Give two examples of isotopes
3. Why are isotopes important in medicine?

---

## Summary
Isotopes are important for understanding atomic structure and applications in science.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Isotopes
- IB Past Papers
`,
      "Electron configuration": `# Electron Configuration

## Introduction
Electron configuration describes how electrons are arranged in shells and subshells. It determines reactivity and bonding.

---

## 1. Shells and Subshells
- **Shells:** Energy levels (n=1,2,3...)
- **Subshells:** s, p, d, f

---

## 2. Aufbau Principle
- Electrons fill lowest energy levels first

---

## 3. Notation
- Example: 1s^2 2s^2 2p^6

---

## 4. IB Exam Tips
- Write electron configurations for elements
- Use periodic table to predict configuration

---

## 5. Practice Problems
1. Write the electron configuration for oxygen
2. What is the configuration for sodium?
3. How does configuration affect reactivity?

---

## Summary
Electron configuration is key to understanding chemical behavior.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Electron Configuration
- IB Past Papers
`
    },
    "Bonding": {
      "Ionic bonding": `# Ionic Bonding

## Introduction
Ionic bonds form when electrons are transferred from one atom to another, creating charged ions. These bonds are strong and form crystalline solids.

---

## 1. Formation
- **Transfer of electrons**
- **Cation:** Positive ion
- **Anion:** Negative ion

---

## 2. Properties
- **High melting/boiling points**
- **Conduct electricity when molten or dissolved**

---

## 3. IB Exam Tips
- Draw ionic compounds
- Explain why ionic bonds are strong

---

## 4. Practice Problems
1. Draw NaCl as ions
2. Why do ionic compounds conduct electricity?
3. What is a cation?

---

## Summary
Ionic bonding is essential for understanding salts and minerals.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Ionic Bonding
- IB Past Papers
`,
      "Covalent bonding": `# Covalent Bonding

## Introduction
Covalent bonds involve sharing electrons between atoms. They create molecules with specific shapes and properties.

---

## 1. Formation
- **Sharing of electrons**
- **Single, double, triple bonds**

---

## 2. Properties
- **Low melting/boiling points**
- **Do not conduct electricity**

---

## 3. IB Exam Tips
- Draw Lewis structures
- Explain bond polarity

---

## 4. Practice Problems
1. Draw H2O as a Lewis structure
2. What is a polar covalent bond?
3. Why don’t covalent compounds conduct electricity?

---

## Summary
Covalent bonding is key for understanding molecules and life chemistry.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Covalent Bonding
- IB Past Papers
`,
      "Metallic bonding": `# Metallic Bonding

## Introduction
Metallic bonds occur between metal atoms, where electrons are delocalized. This gives metals their conductivity and malleability.

---

## 1. Delocalized Electrons
- **Sea of electrons**
- **Positive metal ions**

---

## 2. Properties
- **Conduct electricity**
- **Malleable and ductile**

---

## 3. IB Exam Tips
- Explain why metals conduct electricity
- Relate structure to properties

---

## 4. Practice Problems
1. Why are metals malleable?
2. What is a sea of electrons?
3. Draw a metallic bond diagram

---

## Summary
Metallic bonding explains the unique properties of metals.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Metallic Bonding
- IB Past Papers
`
    },
    "Stoichiometry": {
      "Mole concept": `# Mole Concept

## Introduction
The mole is a unit for counting particles. Avogadro’s number defines one mole. Used to relate mass, volume, and number of particles in chemical reactions.

---

## 1. Definition
- **Mole:** 6.022 x 10^23 particles
- **Molar mass:** Mass of one mole

---

## 2. Calculations
- **Mass to moles**
- **Volume to moles (gases)**

---

## 3. IB Exam Tips
- Use correct units
- Practice mole calculations

---

## 4. Practice Problems
1. Calculate moles in 18g of water
2. What is Avogadro’s number?
3. Convert 22.4L of gas to moles

---

## Summary
The mole concept is essential for quantitative chemistry.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Moles
- IB Past Papers
`,
      "Empirical and molecular formulas": `# Empirical and Molecular Formulas

## Introduction
Empirical formulas show the simplest ratio of elements, while molecular formulas show the actual number of atoms. Used to analyze compounds.

---

## 1. Empirical Formula
- **Simplest ratio**
- **Example:** CH2O

---

## 2. Molecular Formula
- **Actual number of atoms**
- **Example:** C6H12O6

---

## 3. IB Exam Tips
- Calculate empirical from percent composition
- Relate empirical to molecular formula

---

## 4. Practice Problems
1. Find empirical formula from data
2. What is the molecular formula of glucose?
3. How do you convert empirical to molecular?

---

## Summary
Formulas are key for understanding chemical composition.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Empirical & Molecular Formulas
- IB Past Papers
`,
      "Chemical equations": `# Chemical Equations

## Introduction
Chemical equations represent reactions. Balancing equations ensures conservation of mass. Reactants and products are shown with coefficients.

---

## 1. Parts of an Equation
- **Reactants:** Starting substances
- **Products:** Substances formed
- **Coefficients:** Indicate number of particles

---

## 2. Balancing
- **Conservation of mass**
- **Practice balancing equations**

---

## 3. IB Exam Tips
- Show all working
- Use correct formulas and states

---

## 4. Practice Problems
1. Balance H2 + O2 → H2O
2. What is a reactant?
3. Why must equations be balanced?

---

## Summary
Chemical equations are essential for describing reactions.

---

## Further Reading
- IB Chemistry Textbook
- Khan Academy: Chemical Equations
- IB Past Papers
`
    },
  },
  Physics: {
    "Mechanics": {
      "Kinematics": `Kinematics studies motion without considering forces. Key concepts: displacement, velocity, acceleration, and equations of motion. Graphs help visualize changes over time.`,
      "Dynamics": `Dynamics examines forces and their effects on motion. Newton's laws describe how objects move and interact. Applications: cars, sports, engineering.`,
      "Work, energy, power": `Work is force applied over distance. Energy is the ability to do work. Power is the rate of energy transfer. Formulas: W = Fd, KE = 1/2mv^2, P = W/t.`
    },
    "Waves": {
      "Wave properties": `Waves transfer energy without transferring matter. Properties include amplitude, wavelength, frequency, and speed. Types: transverse, longitudinal.`,
      "Sound": `Sound is a longitudinal wave that travels through media. Properties: pitch, loudness, speed. Applications: music, communication.`,
      "Light": `Light is an electromagnetic wave. It exhibits reflection, refraction, and diffraction. Used in optics, technology, and communication.`
    },
    "Electricity and Magnetism": {
      "Electric fields": `Electric fields describe the force around charged particles. Field lines show direction and strength. Applications: circuits, technology.`,
      "Magnetic fields": `Magnetic fields are produced by moving charges. They affect materials and are used in motors, generators, and electronics.`,
      "Electromagnetic induction": `Electromagnetic induction is the creation of voltage by changing magnetic fields. Used in generators, transformers, and wireless charging.`
    }
  }
};
