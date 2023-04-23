import  {render , screen,  waitFor } from '@testing-library/react'
import renderer from 'react-test'
import GitHubCard from "./GitHubCard";

DEFAULT_MOCK_DATA = {
    name: 'sswift',
    avatar_url:'https://avatars.githubusercontent.comu/209315?v=4',
    bio: ' She is a wild and crazy gal'
}

describe(' Test GitHubCard for features when', () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(DEFAULT_MOCK_DATA));
        render(<GitHubCard />)
    });
    afterEach(() => {
        fetch.resetMocks();
    })
    
    test('it contains a photo of the github user', async () => {
        const avatarImage = await waitFor(() => screen.getByAltText('Github avatar'));
        expect(avatarImage).toHaveAttribute('src',
        expect.stringContaing(DEFAULT_MOCK_DATA.avatar_url)
        );
    });
    
    
test('it contains the name of the github user', async () => {
    const userName = await waitFor(() => screen.getByRole('heading', { level:2 }));
    expect(userName).toHaveTextContent(DEFAULT_MOCK_DATA.name)

});

test(' it contains a blurb about the github user', async()=> {
    const blurb = await waitFor(() => screen.getByRole('paragraph'));

});

test('it renders a snapshot', async () => {
const tree = renderer.create(<GitHubCard />).toJSON();
expect(tree).toMatchSnapshot();
});


});