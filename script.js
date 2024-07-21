import ForceGraph3D from '3d-force-graph';

document.addEventListener('DOMContentLoaded', () => {
  const Graph = ForceGraph3D()(document.getElementById('3d-graph'));
  
  const data = {
    nodes: [
      { id: 'node1' },
      { id: 'node2' },
      { id: 'node3' },
      { id: 'node4' }
    ],
    links: [
      { source: 'node1', target: 'node2' },
      { source: 'node1', target: 'node3' },
      { source: 'node2', target: 'node4' },
      { source: 'node3', target: 'node4' }
    ]
  };

  Graph.graphData(data);
});
