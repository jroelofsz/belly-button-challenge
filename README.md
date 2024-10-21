# Belly Button Biodiversity Dashboard

## Overview

This project delivers a static webpage to explore bacteria samples collected from belly buttons. The page initializes with ID 940 to show sample data. From there, users can select other IDs to view the top 10 bacteria found in their samples, displayed in a horizontal bar chart, along with a bubble scatter plot representing the abundance of all bacteria for that individual.

The dashboard is fully interactive and allows users to:
- Select a sample ID to view specific data.
- Visualize the top 10 bacteria found in a sample through a horizontal bar chart.
- Explore the entire distribution of bacteria using a bubble chart.
- See demographic metadata for each selected sample ID.

## Setup

To run the app, please navigate to <a href="https://jroelofsz.github.io/belly-button-challenge/" target="_blank">https://jroelofsz.github.io/belly-button-challenge/</a>. The webpage is hosted on GitHub Pages, so no additional setup is required.

## Functionality

- **Sample Selection**: Users can choose from multiple sample IDs using a dropdown menu.
- **Horizontal Bar Chart**: Displays the top 10 bacteria cultures found in each sample, labeled by their OTU IDs.
- **Bubble Chart**: A bubble chart shows all bacteria cultures found, with the size of each bubble corresponding to the frequency of that bacteria in the sample.
- **Demographic Info**: Displays metadata about the individual whose sample is selected, such as age, ethnicity, location, and gender.

## Technologies Used

- **HTML**: Structures the webpage content.
- **CSS (Bootstrap)**: Provides styling and layout for the webpage.
- **JavaScript (D3.js and Plotly.js)**: Powers the interactivity and data visualization of the dashboard. 
  - **D3.js** is used to dynamically populate dropdowns and retrieve data from a JSON source.
  - **Plotly.js** is used to render the bar chart and bubble chart, making them interactive and responsive.
- **GitHub Pages**: Hosts the static site for easy access.


