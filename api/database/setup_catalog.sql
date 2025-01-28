create table Root
(
    RootID integer primary key autoincrement ,
    Value Text ,
    Depth integer
);
create table Catalog
(
    CatalogID integer primary key autoincrement ,
    Value text ,
    ParentID integer
);
