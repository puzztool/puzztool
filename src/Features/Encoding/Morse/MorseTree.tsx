import { useMediaQuery } from "@mantine/hooks";
import styles from "./MorseTree.module.scss";

// Binary tree: dot goes left/up, dash goes right/down.
// null means no character at that node.
// Tree depth: 5 levels (covers all 26 letters).
interface TreeNode {
  char: string | null;
  dot?: TreeNode | null;
  dash?: TreeNode | null;
}

const morseTree: TreeNode = {
  char: null, // root (start)
  dot: {
    char: "E",
    dot: {
      char: "I",
      dot: {
        char: "S",
        dot: { char: "H" },
        dash: { char: "V" },
      },
      dash: {
        char: "U",
        dot: { char: "F" },
        dash: null,
      },
    },
    dash: {
      char: "A",
      dot: {
        char: "R",
        dot: { char: "L" },
        dash: null,
      },
      dash: {
        char: "W",
        dot: { char: "P" },
        dash: { char: "J" },
      },
    },
  },
  dash: {
    char: "T",
    dot: {
      char: "N",
      dot: {
        char: "D",
        dot: { char: "B" },
        dash: { char: "X" },
      },
      dash: {
        char: "K",
        dot: { char: "C" },
        dash: { char: "Y" },
      },
    },
    dash: {
      char: "M",
      dot: {
        char: "G",
        dot: { char: "Z" },
        dash: { char: "Q" },
      },
      dash: {
        char: "O",
        dash: null,
        dot: null,
      },
    },
  },
};

const NODE_RADIUS = 18;
const LEVEL_SPACING = 70;
const LEAF_SPACING = 50;

function getSpread(depth: number): number {
  return Math.pow(2, depth) * LEAF_SPACING;
}

// --- Vertical tree (top-down, for wide viewports) ---

interface VerticalNodeProps {
  node: TreeNode | null | undefined;
  x: number;
  y: number;
  depth: number;
  maxDepth: number;
  lineColor: string;
}

function VerticalNode({
  node,
  x,
  y,
  depth,
  maxDepth,
  lineColor,
}: VerticalNodeProps) {
  if (!node) return null;

  const childSpread = getSpread(maxDepth - depth - 1) / 2;
  const childY = y + LEVEL_SPACING;
  const lineStartY = y + NODE_RADIUS;

  return (
    <g>
      {node.dot && (
        <>
          <line
            x1={x}
            y1={lineStartY}
            x2={x - childSpread}
            y2={childY - NODE_RADIUS}
            stroke={lineColor}
            strokeWidth={1.5}
          />
          <circle
            cx={(x + (x - childSpread)) / 2}
            cy={(lineStartY + childY - NODE_RADIUS) / 2}
            r={4}
            fill="var(--mantine-color-text)"
          />
        </>
      )}
      {node.dash && (
        <>
          <line
            x1={x}
            y1={lineStartY}
            x2={x + childSpread}
            y2={childY - NODE_RADIUS}
            stroke={lineColor}
            strokeWidth={1.5}
          />
          <rect
            x={(x + (x + childSpread)) / 2 - 12}
            y={(lineStartY + childY - NODE_RADIUS) / 2 - 4}
            width={24}
            height={8}
            fill="var(--mantine-color-text)"
          />
        </>
      )}
      {node.char && (
        <>
          <circle
            cx={x}
            cy={y}
            r={NODE_RADIUS}
            fill="var(--mantine-primary-color-filled)"
          />
          <text
            x={x}
            y={y + 6}
            fill="white"
            fontSize={16}
            fontWeight="bold"
            textAnchor="middle"
          >
            {node.char}
          </text>
        </>
      )}
      {depth < maxDepth && (
        <>
          <VerticalNode
            node={node.dot}
            x={x - childSpread}
            y={childY}
            depth={depth + 1}
            maxDepth={maxDepth}
            lineColor={lineColor}
          />
          <VerticalNode
            node={node.dash}
            x={x + childSpread}
            y={childY}
            depth={depth + 1}
            maxDepth={maxDepth}
            lineColor={lineColor}
          />
        </>
      )}
    </g>
  );
}

function getVerticalBounds(
  node: TreeNode | null | undefined,
  x: number,
  depth: number,
  maxDepth: number,
): [number, number] {
  if (!node) return [Infinity, -Infinity];
  let minX = x - NODE_RADIUS;
  let maxX = x + NODE_RADIUS;
  if (depth < maxDepth) {
    const childSpread = getSpread(maxDepth - depth - 1) / 2;
    const [dotMin, dotMax] = getVerticalBounds(
      node.dot,
      x - childSpread,
      depth + 1,
      maxDepth,
    );
    const [dashMin, dashMax] = getVerticalBounds(
      node.dash,
      x + childSpread,
      depth + 1,
      maxDepth,
    );
    minX = Math.min(minX, dotMin, dashMin);
    maxX = Math.max(maxX, dotMax, dashMax);
  }
  return [minX, maxX];
}

// --- Horizontal tree (left-to-right, for narrow viewports) ---

interface HorizontalNodeProps {
  node: TreeNode | null | undefined;
  x: number;
  y: number;
  depth: number;
  maxDepth: number;
  lineColor: string;
}

function HorizontalNode({
  node,
  x,
  y,
  depth,
  maxDepth,
  lineColor,
}: HorizontalNodeProps) {
  if (!node) return null;

  const childSpread = getSpread(maxDepth - depth - 1) / 2;
  const childX = x + LEVEL_SPACING;
  const lineStartX = x + NODE_RADIUS;

  return (
    <g>
      {node.dot && (
        <>
          <line
            x1={lineStartX}
            y1={y}
            x2={childX - NODE_RADIUS}
            y2={y - childSpread}
            stroke={lineColor}
            strokeWidth={1.5}
          />
          <circle
            cx={(lineStartX + childX - NODE_RADIUS) / 2}
            cy={(y + (y - childSpread)) / 2}
            r={4}
            fill="var(--mantine-color-text)"
          />
        </>
      )}
      {node.dash && (
        <>
          <line
            x1={lineStartX}
            y1={y}
            x2={childX - NODE_RADIUS}
            y2={y + childSpread}
            stroke={lineColor}
            strokeWidth={1.5}
          />
          <rect
            x={(lineStartX + childX - NODE_RADIUS) / 2 - 12}
            y={(y + (y + childSpread)) / 2 - 4}
            width={24}
            height={8}
            fill="var(--mantine-color-text)"
          />
        </>
      )}
      {node.char && (
        <>
          <circle
            cx={x}
            cy={y}
            r={NODE_RADIUS}
            fill="var(--mantine-primary-color-filled)"
          />
          <text
            x={x}
            y={y + 6}
            fill="white"
            fontSize={16}
            fontWeight="bold"
            textAnchor="middle"
          >
            {node.char}
          </text>
        </>
      )}
      {depth < maxDepth && (
        <>
          <HorizontalNode
            node={node.dot}
            x={childX}
            y={y - childSpread}
            depth={depth + 1}
            maxDepth={maxDepth}
            lineColor={lineColor}
          />
          <HorizontalNode
            node={node.dash}
            x={childX}
            y={y + childSpread}
            depth={depth + 1}
            maxDepth={maxDepth}
            lineColor={lineColor}
          />
        </>
      )}
    </g>
  );
}

function getHorizontalBounds(
  node: TreeNode | null | undefined,
  y: number,
  depth: number,
  maxDepth: number,
): [number, number] {
  if (!node) return [Infinity, -Infinity];
  let minY = y - NODE_RADIUS;
  let maxY = y + NODE_RADIUS;
  if (depth < maxDepth) {
    const childSpread = getSpread(maxDepth - depth - 1) / 2;
    const [dotMin, dotMax] = getHorizontalBounds(
      node.dot,
      y - childSpread,
      depth + 1,
      maxDepth,
    );
    const [dashMin, dashMax] = getHorizontalBounds(
      node.dash,
      y + childSpread,
      depth + 1,
      maxDepth,
    );
    minY = Math.min(minY, dotMin, dashMin);
    maxY = Math.max(maxY, dotMax, dashMax);
  }
  return [minY, maxY];
}

function MorseTree() {
  const lineColor = "var(--mantine-color-dimmed)";
  const isNarrow = useMediaQuery("(max-width: 700px)");

  const maxDepth = 4;
  const padding = 15;

  if (isNarrow) {
    // Horizontal: root on left, branches right, dot up, dash down
    const fullHeight = getSpread(maxDepth + 1);
    const centerY = fullHeight / 2;
    const leftX = 5;
    const width = (maxDepth + 1) * LEVEL_SPACING + NODE_RADIUS + 10;

    const [minY, maxY] = getHorizontalBounds(morseTree, centerY, 0, maxDepth);
    const viewY = minY - padding;
    const viewHeight = maxY - minY + padding * 2;

    return (
      <div className={styles.container}>
        <svg
          viewBox={`0 ${viewY} ${width} ${viewHeight}`}
          width="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <HorizontalNode
            node={morseTree}
            x={leftX}
            y={centerY}
            depth={0}
            maxDepth={maxDepth}
            lineColor={lineColor}
          />
        </svg>
      </div>
    );
  }

  // Vertical: root on top, branches down, dot left, dash right
  const fullWidth = getSpread(maxDepth + 1);
  const centerX = fullWidth / 2;
  const topY = 5;
  const height = (maxDepth + 1) * LEVEL_SPACING + NODE_RADIUS + 10;

  const [minX, maxX] = getVerticalBounds(morseTree, centerX, 0, maxDepth);
  const viewX = minX - padding;
  const viewWidth = maxX - minX + padding * 2;

  return (
    <div className={styles.container}>
      <svg
        viewBox={`${viewX} 0 ${viewWidth} ${height}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <VerticalNode
          node={morseTree}
          x={centerX}
          y={topY}
          depth={0}
          maxDepth={maxDepth}
          lineColor={lineColor}
        />
      </svg>
    </div>
  );
}

export default MorseTree;
