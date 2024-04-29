import scrollama from "scrollama"

const scroller = scrollama();
      scroller
      .setup({
        step: ".step",
      })
      .onStepEnter((response) => {
        const graphs = document.getElementById("graphs").children;
        for (let i = 0; i < graphs.length; i++) {
          graphs[i].style.display = "none";
        }
        const graphId = response.element.dataset.graph;
        const graphElement = document.getElementById(graphId);
        graphElement.style.display = "block";
      })