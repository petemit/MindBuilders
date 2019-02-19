import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

class Apps extends Component {
    render() {
        return (
            <div>
                <a href="https://play.google.com/store/apps/details?id=us.mindbuilders.petemit.voicebox.free">
                    <Card style={{ padding: 20, marginBottom: 20 }}>
                        <Typography variant="h4">VoiceBox</Typography>
                        <div style={contentContainer}>
                            <img
                                src="https://lh3.googleusercontent.com/agBejUQd1hnoH7tgXDIpO1L05vikxHOvGZ12tgvsle59-Lc3zSugqpNiZmqvlM-FtFs=s180-rw"
                                alt="VoiceBox"
                                style={pictureContainer}
                                height="100"
                                width="100"
                            />
                            <Typography
                                style={cardText}
                                variant="body2"
                                gutterBottom
                            >
                                Made specifically for voice actors to keep track
                                of their voices. Need a little helper to keep
                                track of your voices in your fantasy novel with
                                dozens of characters? VoiceBox makes it easy to
                                catalog and track your voices so you can quickly
                                reference the subtleties specific to a
                                character.
                            </Typography>
                        </div>
                    </Card>
                </a>
                <a href="https://play.google.com/store/apps/details?id=us.mindbuilders.petemit.timegoalie">
                    <Card style={{ padding: 20, marginBottom: 20 }}>
                        <Typography variant="h4">Time Goalie</Typography>

                        <div style={contentContainer}>
                            <img
                                src="https://lh3.googleusercontent.com/y_csO8SOBRuuU3X_LaQ8FAMbC0ybSRiRvAyTCCOn6qCVXbdAZzRJ-9Cc8dZJqGASDg=s180-rw"
                                alt="VoiceBox"
                                style={pictureContainer}
                                height="100"
                                width="100"
                            />

                            <Typography
                                style={cardText}
                                variant="body2"
                                gutterBottom
                            >
                                Time Goalie allows you to create "Time Goals",
                                where you can specify if you want to limit the
                                time you spend on a goal, or if you want to
                                encourage yourself to spend a minimum time
                                amount on a goal.
                            </Typography>
                        </div>
                    </Card>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.mindbuilders.cognitivemoodlog">
                    <Card style={{ padding: 20, marginBottom: 20 }}>
                        <Typography variant="h4">Cognitive Mood Log</Typography>

                        <div style={contentContainer}>
                            <img
                                src="https://lh3.googleusercontent.com/F9bw0x-THg2EjgVCg3pwMrwlMO9cOUDrvaSr6fubkLysFt8zSTPeyEZw1riGAc5v_nTt=s180-rw"
                                alt="VoiceBox"
                                style={pictureContainer}
                                height="100"
                                width="100"
                            />

                            <Typography
                                style={cardText}
                                variant="body2"
                                gutterBottom
                            >
                                Sometimes our mind reacts to difficult situations with automatic negative thoughts. 
                                These thoughts sometimes make our negative emotions more powerful. 
                                This app is a simple interactive log that allows you 
                                to match up your negative thoughts with cognitive distortions. This process of 
                                identifying cognitive distortions and finding rational positive 
                                thoughts to counteract the negative thoughts can powerfully affect your emotions for the better.  
                            </Typography>
                        </div>
                    </Card>
                </a>
            </div>
        );
    }
}
const pictureContainer = { marginTop: 20, minWidth: 100 };
const cardText = {
    marginLeft: 30,
    marginTop: 10
};
const contentContainer = {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
};
export default Apps;
