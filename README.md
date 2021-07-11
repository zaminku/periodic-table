# Background
The periodic table is a neat way to display data about every chemical element. Scientists organized the elements in this order to group together elements by their properties. Reading the table left to right, one can immediately gather that the data is organized according to increasing atomic number (the number of protons an element has).

Beyond that, there's a reason why there are a certain number of elements on each row, and why each column contains a group of elements. This project attempts to display and graph empirical data on each of these elements to display patterns that aren't shown by the standard periodic table.


# Functionality & MVPs
In the Interactive Periodic Table, users will be able to:
- Display a periodic table with data for atomic number
- Retrieve information regarding properties of each chemical element when clicked on
- Graph a specific property across all elements, with increasing atomic number


In addition, this project will include:
- An introduction modal describing how to use the graphs
- A production README

# Wireframes
![Wireframe for the project](/wireframe.png "Interactive Periodic Table Wireframe")
- In the center of the webpage, you can find the periodic table of elements.
- To display the properties of a specific element to the right of the periodic table, click on an element.
- At the bottom of the page will be the graph. To create a graph, select any buttons to the left of the graph with the desired property.
- Click on Clear Graph button to reset the graph
- Use the temperature slider to color code the elements into solid/liquid/gas categories (bonus)
- Click on different categories (metals/metalloids/nonmetals) to filter data on the graph
- Personal links like Github and Linkedin can be found at the bottom right

# Technologies, Libraries, & APIs
- The Mendeleev API to fetch chemical properties data
- D3 for data visualization
- npm to manage project dependencies

# Implementation Timeline
- **Friday Afternoon & Weekend**: Complete final proposal. Setup the project, including getting webpack running. Get comfortable using the Mendeleev API to grab data. Get grid rendered for the periodic table.
- **Monday**: Successfully fetch data from the API. If periodic table is not rendered yet, complete that. Work on populating the periodic table and being able to select an element and displaying its data.
- **Tuesday**: If periodic table isn't yet populated, finish this first. Use D3 to get graphs working for the different properties we are specifying.
- **Wednesday**: Finish displaying the graphs and be able to hover over data points to identify which element the point represents. Complete personal links and final styling.
- **Thursday Morning**: Deploy to Github pages. Rewrite the final proposal as a production README.

# Bonus (optional)
- Use the temperature slider to see the physical state of an element (solid/liquid/gas) (bonus)
- Heat map the periodic table when selecting a property to graph (bonus)
- Based on grouping (metals/metalloids/nonmetals), filter which data to graph (bonus)

# Backend