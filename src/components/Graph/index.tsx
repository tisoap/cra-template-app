import { SmartBezierEdge } from '@tisoap/react-flow-smart-edge'
import ReactFlow from 'react-flow-renderer'
import type { ReactNode } from 'react'
import type { ReactFlowProps, EdgeTypes } from 'react-flow-renderer'

const nodes = [
	{
		id: '1',
		data: { label: 'Node 1' },
		position: { x: 300, y: 100 }
	},
	{
		id: '2',
		data: { label: 'Node 2' },
		position: { x: 300, y: 200 }
	}
]

const edges = [
	{
		id: 'e21',
		source: '2',
		target: '1',
		type: 'smart'
	}
]

const edgeTypes: EdgeTypes = {
	smart: SmartBezierEdge
}

export interface GraphProps extends ReactFlowProps {
	children?: ReactNode
}

export const Graph = ({ children, ...rest }: GraphProps) => {
	return (
		<ReactFlow
			defaultNodes={nodes}
			defaultEdges={edges}
			edgeTypes={edgeTypes}
			{...rest}
		>
			{children}
		</ReactFlow>
	)
}
