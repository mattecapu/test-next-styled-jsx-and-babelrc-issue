const Element1 = () =>
	<div>
		{"world1"}
		<style jsx>{`
			* {
				color: green;
			}
		`}</style>
	</div>;

const Element2 = () =>
	<div>
		{"world2"}
		<style jsx>{`
			* {
				color: purple;
			}
		`}</style>
	</div>;

export default () =>
	<div>
		{"hello"}
		<Element2 />
		<Element1 />
		<style jsx>{`
			* {
				color: red;
			}
		`}</style>
	</div>;
