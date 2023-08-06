import * as React from 'react';
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import {
  PresenceBadgeStatus,
  Avatar,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  useTableFeatures,
  TableColumnDefinition,
  TableColumnId,
  useTableSort,
  TableCellLayout,
  createTableColumn,
} from '@fluentui/react-components';
import {
  InfosysLogo,
  MicrosoftLogo,
  OneComLogo,
  SaltSideLogo,
  WalmartLabsLogo,
} from 'components/company/images';

type CompanyProfileCell = {
  label: string;
  icon: JSX.Element;
};

type RoleStatusCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type StartDateCell = {
  label: string;
  timestamp: Date;
};

type EndDateCell = {
  label: string;
  timestamp: Date;
};

type Item = {
  company: CompanyProfileCell;
  role: RoleStatusCell;
  startDate: StartDateCell;
  endDate: EndDateCell;
};

const items: Item[] = [
  {
    company: { label: 'Microsoft R&D', icon: <MicrosoftLogo /> },
    role: { label: 'Senior Software engineer', status: 'available' },
    startDate: {
      label: 'September 23, 2019',
      timestamp: new Date(2019, 8, 23, 9, 0, 0),
    },
    endDate: {
      label: '...',
      timestamp: new Date(), //icon: <EditRegular />,
    },
  },
  {
    company: { label: 'Walmart Labs', icon: <WalmartLabsLogo /> },
    role: { label: 'Lead developer', status: 'offline' },
    startDate: {
      label: 'December 15, 2017',
      timestamp: new Date(2017, 11, 15, 9, 0, 0),
    },
    endDate: {
      label: 'September 21, 2017',
      timestamp: new Date(2019, 8, 21, 9, 0, 0),
    },
  },
  {
    company: { label: 'SaltSide Technologies', icon: <SaltSideLogo /> },
    role: { label: 'Technical Lead', status: 'offline' },
    startDate: {
      label: 'May 04, 2016',
      timestamp: new Date(2016, 4, 4, 9, 0, 0),
    },
    endDate: {
      label: 'December 15, 2017',
      timestamp: new Date(2017, 11, 15, 9, 0, 0),
    },
  },
  {
    company: { label: 'One.com', icon: <OneComLogo /> },
    role: { label: 'Senior Software Developer', status: 'offline' },
    startDate: {
      label: 'September 21, 2012',
      timestamp: new Date(2012, 8, 21, 9, 0, 0),
    },
    endDate: {
      label: 'May 04, 2016',
      timestamp: new Date(2016, 4, 4, 9, 0, 0),
    },
  },
  {
    company: { label: '', icon: <InfosysLogo /> },
    role: { label: 'System Engineer', status: 'offline' },
    startDate: {
      label: 'August 06, 2006',
      timestamp: new Date(2006, 7, 6, 9, 0, 0),
    },
    endDate: {
      label: 'November 21, 2009',
      timestamp: new Date(2009, 10, 21, 9, 0, 0),
    },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: 'company',
    compare: (a, b) => {
      return a.company.label.localeCompare(b.company.label);
    },
  }),
  createTableColumn<Item>({
    columnId: 'role',
    compare: (a, b) => {
      return a.role.label.localeCompare(b.role.label);
    },
  }),
  createTableColumn<Item>({
    columnId: 'startDate',
    compare: (a, b) => {
      return a.startDate.timestamp > b.startDate.timestamp ? 1 : -1;
    },
  }),
  createTableColumn<Item>({
    columnId: 'endDate',
    compare: (a, b) => {
      return a.startDate.timestamp > b.startDate.timestamp ? 1 : -1;
    },
  }),
];

export const ExperienceTable = () => {
  const [sortState, setSortState] = React.useState<{
    sortDirection: 'ascending' | 'descending';
    sortColumn: TableColumnId | undefined;
  }>({
    sortDirection: 'descending' as const,
    sortColumn: 'startDate',
  });

  const {
    getRows,
    sort: { getSortDirection, toggleColumnSort, sort },
  } = useTableFeatures(
    {
      columns,
      items,
    },
    [
      useTableSort({
        sortState,
        onSortChange: (e, nextSortState) => setSortState(nextSortState),
      }),
    ]
  );

  const headerSortProps = (columnId: TableColumnId) => ({
    onClick: (e: React.MouseEvent) => toggleColumnSort(e, columnId),
    sortDirection: getSortDirection(columnId),
  });

  const rows = sort(getRows());

  return (
    <Table sortable aria-label='Table with controlled sort'>
      <TableHeader>
        <TableRow>
          <TableHeaderCell {...headerSortProps('company')}>
            Company
          </TableHeaderCell>
          <TableHeaderCell {...headerSortProps('role')}>Role</TableHeaderCell>
          <TableHeaderCell {...headerSortProps('startDate')}>
            Start Date
          </TableHeaderCell>
          <TableHeaderCell {...headerSortProps('endDate')}>
            End Date
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ item }) => (
          <TableRow key={item.company.label}>
            <TableCell>
              <TableCellLayout media={item.company.icon}>
                {item.company.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout
                media={
                  <Avatar
                    aria-label={item.role.label}
                    name={item.role.label}
                    badge={{
                      status: item.role.status as PresenceBadgeStatus,
                    }}
                  />
                }
              >
                {item.role.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>{item.startDate.label}</TableCell>
            <TableCell>
              {/* <TableCellLayout media={item.endDate.}> */}
              <TableCellLayout>{item.endDate.label}</TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
