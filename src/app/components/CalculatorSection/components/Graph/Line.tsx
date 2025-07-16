import React from "react";
import { Line as ChartLine } from "recharts";

const Line = () => {
	return (
		<ChartLine
			type="monotone"
			activeDot={false}
			dataKey="balance"
			stroke="#27256F"
			strokeWidth={3}
			dot={(props: any) => {
				if (props.payload.balance === 0) {
					return (
						<circle
							cx={props.cx}
							cy={props.cy}
							r={0}
							fill="#none"
							stroke=""
							style={{ zIndex: "-1" }}
						/>
					);
				}
				return (
					<circle
						cx={props.cx}
						cy={props.cy}
						r={5}
						fill="#4F4BAD"
						stroke=""
						style={{ zIndex: "-1" }}
					/>
				);
			}}
		/>
	);
};

export default Line;
