const url = 'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json'

d3.json(url).then(
    data => {
        console.log(data)
    }
)

var samples, metadata, targetData

function init(){
    d3.json(url).then(
        data => {
            selection = d3.select('#selDataset')
            data.names.forEach(element => {
                selection.append('option').text(element).property('value',element)
            });
            metadata = data.metadata
            samples = data.samples
            meta(data.metadata[0])
            hbarChart(data.samples[0])
            bubbleChart(data.samples[0])
        }
    )
}

//Initialize Dataset
init()

d3.selectAll('#selDataset').on('change', function(){
    let value = parseInt(this.value)
    targetData = metadata.find(item => item.id == value)
    targetSample = samples.find(item => item.id == value)
    hbarChart(targetSample)
    meta(targetData)
    bubbleChart(targetSample)
})

function valueChanged(meta, sample){
    meta(value)
}

hbarChart(samples)

function meta(data){
    let demographic = d3.select('#sampleMetadata')

    demographic.html(
        `
        ID: ${data.id} <br>
        Ethnicity: ${data.ethnicity} <br>
        Gender: ${data.gender} <br>
        Age: ${data.age} <br>
        Location: ${data.location} <br>
        bbtype: ${data.bbtype} <br>
        wfrq: ${data.wfreq} <br>
        `
    )
}

function hbarChart(sample) {


    // Debugging logs
    console.log("Sample Values:", sample.sample_values);
    console.log("OTU IDs:", sample.otu_ids);
    console.log("OTU Labels:", sample.otu_labels);

    let trace = {
        x: sample.sample_values.slice(0,10).reverse(),
        y: sample.otu_ids.slice(0,10).map(id => `OTU ${id}`),
        text: sample.otu_labels.slice(0,10).reverse(),
        name: 'Bacteria Cultures',
        type: "bar",
        orientation: 'h'
    };

    let data = [trace];

    let layout = {
        title: 'Top 10 Bacteria Cultures Found',
        margin: { l: 100, r: 100, t: 50, b: 50 }
    };

    // Plot the horizontal bar chart using Plotly
    Plotly.newPlot("hbarChart", data, layout);
}

function bubbleChart(sample){
    let trace = {
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: "markers",
        marker: {
            color: sample.otu_ids,
            colorscale: "Pastel",
            size: sample.sample_values
        },
        type: 'scatter'
    }

    let data = [trace]

    let layout = {
        title: `Bacteria Cultures Per Sample`
    }
    Plotly.newPlot("bubbleChart",data, layout)
}