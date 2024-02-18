import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center h-20">
			<Link href="/">
				<h1 className="text-3xl font-bold pl-5">Images</h1>
			</Link>
		</div>
	);
}
