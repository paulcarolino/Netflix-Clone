import React, { useContext, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Header, Loading, Card, Player } from "../components";
import * as ROUTES from "../constants/routes";
import { FireBaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profile";
import { FooterContainer } from "./footer";
import { useNavigate } from "react-router-dom";

export function BrowseContainer({ slides }) {
  const navigate = useNavigate();
  const { firebase } = useContext(FireBaseContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("series");
  const [slidesRow, setSlideRows] = useState({});

  const signOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => console.log(error));
    navigate("/signin");
  };

  const user = {
    displayName: "Karl",
    photoURL: 1,
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [user]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slidesRow, {
      keys: ["data-description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slidesRow.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort={true}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.Link
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={signOut}>Sign Out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him. Isolated, bullied and disregarded by society, Fleck
            begins a slow descent into madness as he transforms into the
            criminal mastermind known as the Joker.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slidesRow.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
