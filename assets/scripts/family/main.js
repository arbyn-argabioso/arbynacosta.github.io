// Some constants
const subtractor = 2;
const node = {
  margin: 10 - subtractor,
  height: 52 - subtractor,
  width: 245 - (subtractor * 2),
  background: '#ffffff'
}

// For conciseness. See the "Building Parts" intro page for more
var $ = go.GraphObject.make;

var tree = $(
  go.Diagram,
  "tree",
  {
    "undoManager.isEnabled": true,
    padding: node.height - 10,
    initialAutoScale: go.Diagram.Uniform,
    layout: $(
      go.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(node.margin * 6), 20),
        nodeSpacing: node.margin * 1.5,
      }
    )
  }
);

tree.addDiagramListener("ObjectSingleClicked", function(e) {
  var part = e.subject.part;
  if (!(part instanceof go.Link)) console.log("Clicked on " + part.data.key);
});

tree.nodeTemplate = $(
  go.Node,
  {
    selectable: false,
  },
    new go.Binding('height', 'height'),
    new go.Binding('width', 'width'),
  $(
    go.Shape,
    {
      desiredSize: new go.Size(node.width, node.height),
      figure: 'RoundedRectangle',
      fill: node.background,
      stroke: null,
      shadowVisible: true
    }
  ),
  $(
    go.Picture,
    {
      width: node.height,
      height: node.height,
      margin: new go.Margin(0.5, 0, 0, 0)
    },
    new go.Binding("source", function(nodeData) {
      if (nodeData.image) {
        return nodeData.image;
      }
      if (nodeData.gender.toUpperCase() == 'M') {
        return 'https://raw.githubusercontent.com/arbynacosta/arbynacosta.github.io/master/assets/images/family/male.png';
      }
      return 'https://raw.githubusercontent.com/arbynacosta/arbynacosta.github.io/master/assets/images/family/female.png';
    })
  ),
  $(
    go.Shape,
    {
      desiredSize: new go.Size(4, node.height),
      figure: "Rectangle",
      stroke: null,
      margin: new go.Margin(0, 0, 0, node.height - 1)
    },
    new go.Binding("fill", function(nodeData) {
      return nodeData.gender.toUpperCase() == 'M' ? '#2799fd' : '#ea1a68';
    })
  ),
  $(
    go.TextBlock,
    {
      font: "700 14px Google Sans, sans-serif",
      margin: new go.Margin(node.margin + 1, node.margin, 0, node.height + node.margin + 4),
      maxSize: new go.Size(node.width - node.height, 24)
    },
    new go.Binding("text", function(nodeData) {
      let middleInitialsArray  = nodeData.name.middle.trim().split(' ');
      let middleInitialsString = '';

      if (middleInitialsArray[0] != '') {
        for (let i = 0; i < middleInitialsArray.length; i++) {
          middleInitialsString += middleInitialsArray[i][0] + '. '
        }
      }

      return nodeData.name.first + " " + middleInitialsString + nodeData.name.last;
    })
  ),
  $(
    go.TextBlock,
    {
      font: "400 12px Roboto, sans-serif",
      margin: new go.Margin(25 + parseInt(node.margin / 2), node.margin, node.margin, node.height + node.margin + 4),
      maxSize: new go.Size(node.width - node.height, 24)
    },
    new go.Binding("text", function(nodeData) {
      return nodeData.lifespan + ' • ' + nodeData.key;
    })
  ),
);

// define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = $(
  go.Link,
  {
    selectable: false,
    routing: go.Link.Orthogonal,
    corner: 0
  },

  // the link path, a Shape
  $(
    go.Shape,
    {
      strokeWidth: 1,
      stroke: "#6a6a6a"
    }
  )
);


var model = $(go.TreeModel);
model.nodeDataArray = TREE_DATA;
tree.model = model;

document.querySelector('footer').classList.remove("hidden");
