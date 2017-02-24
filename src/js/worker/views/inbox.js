// @flow

import {getCopy} from '../db';
import bbgmViewReact from '../../util/bbgmViewReact';
import Inbox from '../../ui/views/Inbox';

async function updateInbox() {
    const messages = await getCopy.messages();

    messages.reverse();

    let anyUnread = false;
    for (const message of messages) {
        message.text = message.text.replace(/<p>/g, "").replace(/<\/p>/g, " "); // Needs to be regex otherwise it's cumbersome to do global replace
        if (!message.read) {
            anyUnread = true;
        }
    }

    return {
        anyUnread,
        messages,
    };
}

export default bbgmViewReact.init({
    id: "inbox",
    runBefore: [updateInbox],
    Component: Inbox,
});