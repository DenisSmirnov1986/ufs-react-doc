import * as React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

import { FunctionsType } from '../../types';
import FunctionsTable from '../FunctionsTable';

interface Props {
    list: FunctionsType[];
    isStandaloneFunction: boolean;
}

export default class Component extends React.Component<Props, {}> {

    render() {
        const { list } = this.props;
        if (!list || list.length === 0) {
            return null;
        }

        const headerTitle = this.props.isStandaloneFunction ? "Description" : "Methods";

        return (
            <div>
                <PanelGroup defaultActiveKey="1" accordion>
                    <Panel header={headerTitle} eventKey="1">
                        <FunctionsTable functions={list} />
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
}
