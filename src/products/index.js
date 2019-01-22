import React from 'react';
import {
    translate,
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    SearchInput,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
    required,
} from 'react-admin';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/icons/Collections';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import GridList from './GridList';
import Poster from './Poster';

export const ProductIcon = Icon;

const quickFilterStyles = {
    root: {
        marginBottom: '0.7em',
    },
};

const QuickFilter = translate(
    withStyles(quickFilterStyles)(({ classes, label, translate }) => (
        <Chip className={classes.root} label={translate(label)} />
    ))
);

export const ProductList = props => (
    <List
        {...props}
        perPage={10}
        sort={{ field: 'id', order: 'ASC' }}
    >
        <GridList />
    </List>
);

const createStyles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    width: { width: '5em' },
    widthFormGroup: { display: 'inline-block' },
    height: { width: '5em' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

export const ProductCreate = withStyles(createStyles)(
    ({ classes, ...props }) => (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="resources.products.tabs.image">
                    <TextInput
                        autoFocus
                        source="image"
                        options={{ fullWidth: true }}
                        validate={required()}
                    />
                    <TextInput
                        source="thumbnail"
                        options={{ fullWidth: true }}
                        validate={required()}
                    />
                </FormTab>
                <FormTab label="resources.products.tabs.details" path="details">
                    <TextInput source="reference" validate={required()} />
                    <NumberInput
                        source="price"
                        validate={required()}
                        className={classes.price}
                    />
                    <NumberInput
                        source="width"
                        validate={required()}
                        className={classes.width}
                        formClassName={classes.widthFormGroup}
                    />
                    <NumberInput
                        source="height"
                        validate={required()}
                        className={classes.height}
                        formClassName={classes.heightFormGroup}
                    />
                    <NumberInput
                        source="stock"
                        validate={required()}
                        className={classes.stock}
                    />
                </FormTab>
                <FormTab
                    label="resources.products.tabs.description"
                    path="description"
                >
                    <RichTextInput source="description" addLabel={false} />
                </FormTab>
            </TabbedForm>
        </Create>
    )
);

const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;

const editStyles = {
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

export const ProductEdit = withStyles(editStyles)(({ classes, ...props }) => (
    <Edit {...props} title={<ProductTitle />}>
        <TabbedForm>
            <FormTab label="resources.products.tabs.image">
                <Poster />
                <TextInput source="image" options={{ fullWidth: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} />
            </FormTab>
            <FormTab label="resources.products.tabs.details" path="details">
                <TextInput source="reference" />
                <NumberInput source="price" className={classes.price} />
                <NumberInput
                    source="width"
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                />
                <NumberInput
                    source="height"
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                />
                <NumberInput source="stock" className={classes.stock} />
            </FormTab>
            <FormTab
                label="resources.products.tabs.description"
                path="description"
            >
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
            
        </TabbedForm>
    </Edit>
));
