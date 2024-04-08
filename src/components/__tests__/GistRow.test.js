import React from 'react';
import { render, screen } from '@testing-library/react';
import GistRow from '../GistRow';

const mockGist = {
    "id": "576bd3db4ff51e03511edf3aa9ebd377",
    "files": {
        "10bit_to_8bit.py": {
            "filename": "10bit_to_8bit.py",
            "type": "application/x-python",
            "language": "Python",
            "raw_url": "https://gist.githubusercontent.com/sasanhb65/576bd3db4ff51e03511edf3aa9ebd377/raw/a0e069b763f7345acb88631dd1e4a01f24d8fa25/10bit_to_8bit.py",
            "size": 1579
        },
        "cut_yuv.py": {
            "filename": "cut_yuv.py",
            "type": "application/x-python",
            "language": "Python",
            "raw_url": "https://gist.githubusercontent.com/sasanhb65/576bd3db4ff51e03511edf3aa9ebd377/raw/3603ec13d26972bedb8a79d314ae92fc000ad5e3/cut_yuv.py",
            "size": 270
        },
        "view_yuv.py": {
            "filename": "view_yuv.py",
            "type": "application/x-python",
            "language": "Python",
            "raw_url": "https://gist.githubusercontent.com/sasanhb65/576bd3db4ff51e03511edf3aa9ebd377/raw/fbed6c14f4d91d114b432a4ed3221ab1de152415/view_yuv.py",
            "size": 1089
        }
    },
    "created_at": "2024-04-06T02:25:09Z",
    "owner": {
        "login": "sasanhb65",
        "id": 154929393,
        "node_id": "U_kgDOCTwI8Q",
        "avatar_url": "https://avatars.githubusercontent.com/u/154929393?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sasanhb65",
        "html_url": "https://github.com/sasanhb65",
        "followers_url": "https://api.github.com/users/sasanhb65/followers",
        "following_url": "https://api.github.com/users/sasanhb65/following{/other_user}",
        "gists_url": "https://api.github.com/users/sasanhb65/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sasanhb65/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sasanhb65/subscriptions",
        "organizations_url": "https://api.github.com/users/sasanhb65/orgs",
        "repos_url": "https://api.github.com/users/sasanhb65/repos",
        "events_url": "https://api.github.com/users/sasanhb65/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sasanhb65/received_events",
        "type": "User",
        "site_admin": false
    }    
}
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

it("renders a gist row", () => {
  render(<GistRow gist={mockGist} />);  
  expect(screen.getByText('Gist ID: 576bd3db4ff51e03511edf3aa9ebd377')).toBeInTheDocument()
});