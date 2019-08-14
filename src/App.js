import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail } from './components';
import youtube from './api/youtube';

class App extends React.Component {
	handleSubmit = async searchTerm => {
		// The 'q' in q: searchTerm is default in YouTube API
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyBIcOnnRqzrc4KVC-1_2AXpEn60ZW0dSM0',
				q: searchTerm
			}
		});

		console.log(response);
	};

	render() {
		return (
			<Grid justify="center" container spacing={10}>
				<Grid item xs={12}>
					<Grid container spacing={10}>
						<Grid item xs={12}>
							<SearchBar onFormSubmit={this.handleSubmit} />
						</Grid>
						<Grid item xs={8}>
							<VideoDetail />
						</Grid>
						<Grid item xs={4}>
							{/* video list */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default App;
