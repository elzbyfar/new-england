let json = {
	options: {
		header: 'New England',
		description:
			"The northeastern region of the United States comprising the states of Maine, Vermont, New Hampshire, Massachusetts, Connecticut and Rhode Island. It's known for its Colonial past, Atlantic coastline, changing autumn foliage and forested mountains. Boston, Massachusetts, the region’s hub, pre-dates the American Revolution, and its Freedom Trail passes sites that were critical to the nation’s founding."
	},
	records: [
		{
			background_image: 'https://addapptation.blob.core.windows.net/pictures/nature/Vibrance.png',
			background_color: '#d44697',
			state: 'New Hampshire',
			description:
				'New Hampshire, a U.S. state in New England, is defined by its quaint towns and large expanses of wilderness.',
			link: 'https://en.wikipedia.org/wiki/New_Hampshire',
			new_window: false
		},
		{
			background_image: '',
			background_color: '#d44697',
			state: 'Maine',
			description:
				'Maine, the northeasternmost U.S. state, is known for its rocky coastline, maritime history and nature areas like the granite and spruce islands of Acadia National Park.',
			link: 'https://en.wikipedia.org/wiki/Maine',
			new_window: true
		},
		{
			background_image: '',
			background_color: '#d44697',
			state: 'Vermont',
			description:
				'Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested.',
			link: 'https://en.wikipedia.org/wiki/Vermont',
			new_window: true
		},
		{
			background_image: '',
			background_color: '#d44697',
			state: 'Massachusetts',
			description:
				'Massachusetts, officially known as the Commonwealth of Massachusetts, is the most populous state in the New England region of the northeastern United States.',
			link: 'https://en.wikipedia.org/wiki/Massachusetts',
			new_window: false
		},
		{
			background_image: '',
			background_color: '#346a78',
			state: 'Connecticut',
			description: '',
			link: 'https://en.wikipedia.org/wiki/Connecticut',
			new_window: true
		},
		{
			background_image: 'https://addapptation.blob.core.windows.net/pictures/nature/backlit.png',
			background_color: '#d44697',
			state: 'Rhode Island',
			description:
				'Rhode Island, a U.S. state in New England, is known for sandy shores and seaside Colonial towns.',
			link: 'https://en.wikipedia.org/wiki/RhodeIsland',
			new_window: false
		}
	]
};
/*---------------------------------------------
Write Your Javascript Code Below
---------------------------------------------*/

const createElements = (htmlString) => {
	const element = document.createElement('div');
	element.innerHTML = htmlString.trim();
	return element.firstChild;
};

const headerComponent = ({ title, description }) => {
	const header = createElements(`
        <section class="header-container">
            <span class="page-title"></span>
            <p class="page-description"></p>
        </section>
    `);

	const pageTitle = header.querySelector('.page-title');
	const pageDescription = header.querySelector('.page-description');

	pageTitle.textContent = title;
	pageDescription.textContent = description;

	return header;
};

const divider = document.createElement('hr');

const bodyComponent = ({ records }) => {
	const body = createElements(`<section class="body-container"></section>`);

	// create an array of tiles
	const tileElements = records.map((record) => {
		const tile = createElements(`
            <div class="tile">
                <h3 class="state-name"></h3>
                <a class="link"><p class="state-description"></p></a>
            </div>
						`);

		// set background color or create css variable with background image
		if (record.background_image === '') {
			tile.style.background = record.background_color;
		} else {
			tile.style.setProperty('--backgroundImage', `url(${record.background_image})`);
		}

		const stateName = tile.querySelector('.state-name');
		const stateDescription = tile.querySelector('.state-description');
		const link = tile.querySelector('.link');
		link.href = record.link;
		link.target = record.new_window ? '_blank' : '';

		// disable hover if no description
		if (record.description === '') {
			tile.className = 'tile-no-hover';
			link.className = 'link-no-hover';
		}

		stateName.textContent = record.state;
		stateDescription.textContent = record.description;

		return tile;
	});

	body.append(...tileElements);

	return body;
};

const wrapper = document.getElementById('tiles-342');

wrapper.append(
	headerComponent({
		title: json.options.header,
		description: json.options.description
	}),
	divider,
	bodyComponent({
		records: json.records
	})
);
