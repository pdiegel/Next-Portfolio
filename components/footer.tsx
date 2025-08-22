const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer>
			<div className="footerItems wrapper">
				<p className="text-center">
					© {currentYear} Philip Diegel. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
