# What is DFS?

DFS stands for Depth First Search, a graph traversal algorithm that involves starting at an arbitrary root node, and exploring all other accessible nodes by searching along the deepest path first. This algorithm explores as far as possible along each branch, and then backtracks along each subbranch. This algorithm works because we keep track of each visited node via a stack and a visited array. 

Depth First Search is a recursive function that performs DFS on each adjacent, unvisited node, and continues the process for all other nodes. 

# Algorithm

The algorithm starts from the root and looks at all the edges leading to other nodes. All unvisited nodes sharing an edge with the current nodes are called the `frontier` of that node. It performs DFS on each node in order of their value. So the smallest node gets selected first, performs DFS, returns back to the current node, moves on to the next, and so on. 

The nodes are added to a stack, and as the algorithm progresses, their frontier nodes are also added. Once the exploration of a node is complete, it is popped from the stack. 

# DFS for Directed Graphs

In the below illustration, visited nodes are light blue, frontier nodes are orange, and unvisited nodes are white.

Here, the nodes will only follow the outward edges, so all of the nodes may not be covered, even if they are in a single connected component.

![Directed DFS](images/Directed.gif)

# DFS for Undirected Graphs

Here, nodes will follow all edges since the graph is undirected, and all the nodes in a connected component will be visited.

In the below illustration, visited nodes are light blue, frontier nodes are orange, and unvisited nodes are white.

![Undirected DFS](images/Undirected.gif)

# Advantages

1. The memory requirement is linear with respect to the number of nodes.
2. It uses less time and space complexity than other algorithms like BFS (Breadth First Search).
3. The solution can be found out without too much searching.

# Disadvantages

1. The discovery of a solution is not guaranteed.
2. Cut-off depth is smaller so time complexity is more.
3. Depth can not be determined until the search has proceeded.

