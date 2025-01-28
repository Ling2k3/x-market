import { Database } from "bun:sqlite";
import { readdir } from "node:fs";
import { $ } from "bun";

function test3(): void {
	const db = new Database("test.db");
	const query = db.prepare("insert into tbl1(id, name) values (1, $name);");
	const trans = db.transaction((da) => {
		for (const d of da) query.run(d);
	});
	trans([
		{ $name: "ducanh" },
		{ $name: "ducanh2" },
		{ $name: "ducanh4" },
		{ $name: "ducanh5" },
	]);
}
type tbl1DBO = {
	id: number;
	name: string;
	createAt: string;
};

function test4(): void {
	const db = new Database("test.db");
	const query = db.prepare<tbl1DBO, string>(
		"insert into tbl1(id, name) values (?, ?)",
	);
	const rs: tbl1DBO[] = query.all("ducanh");
	for (const r of rs) {
		console.log(r);
	}
}
function createDB() {
	const dictPath = "./";
	readdir(dictPath, { recursive: true }, async (err, files) => {
		if (err) {
			console.log(err);
		} else {
			const sql_file = files.filter((e) => e.includes(".sql"));
			for (const e of sql_file) {
				const filename = (e as string).split(".sql")[0];
				const dbName = UpFirstChar(filename.split("setup_")[1]);
				await $`sqlite3 ${dbName}.db < ${e}`.then(() => {
					console.log(`created db ${dbName}`);
				});
			}
		}
	});
}

type ResultGetTbl = {
	name: string;
	tbl_name: string;
	rootpage: number;
	sql: string;
};
type ResultGetColumn = {
	cid: number;
	name: string;
	type: string;
	notnull: number;
	dflt_value: string;
	pk: number;
};

function test1(): void {
	readdir("./", { recursive: true }, async (err, files) => {
		if (err) {
			console.log(err);
		} else {
			const sql_file = files
				.filter((e) => e.includes(".db"))
				.filter((e) => !(e.includes("Payment") || e.includes("Wallet")));
			for (const e of sql_file) {
				const db = new Database(e as string);
				const rs = db.query<ResultGetTbl, string>(
					"select * from sqlite_master where type='table' and name not like 'sqlite_%';",
				);
				const rss: ResultGetTbl[] = rs.all("");
				for (const e of rss) {
					const info_col = db.query<ResultGetColumn, string>(
						`pragma table_info(${e.name})`,
					);
					if (e.name !== "FlashSale" && e.name !== "tbl1") {
						const info_col_ = info_col.all("");
						let stmt = `insert into ${e.name} (`;
						if (info_col_.length !== 1) {
							for (const e of info_col_) {
								if (e.pk === 0 && e.dflt_value === null) {
									stmt += `${e.name},`;
								}
							}
							stmt = `${stmt.slice(0, -1)} ) values (`;
							for (const e of info_col_) {
								if (e.pk === 0 && e.dflt_value === null) {
									stmt += `$${e.name},`;
								}
							}
							stmt = `${stmt.slice(0, -1)} )`;
							type TypeCol = { sec: number };
							for (const ic of info_col_) {
								switch (ic.type) {
									case "INTEGER": {
										console.log("integer");
										break;
									}
									case "TEXT": {
										console.log("text");
										break;
									}
									case "FLOAT": {
										console.log("float");
										break;
									}
									case "BLOB": {
										console.log("blob");
										break;
									}
									case "datetime": {
										console.log("date");
										break;
									}
									case "date": {
										console.log("date");
										break;
									}
									default: {
										console.log("not support");
									}
								}
							}
						}
					}
				}
			}
		}
	});
}
function UpFirstChar(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const db = new Database("test.db");
async function test6() {
	const buf = Bun.file("README.md");
	const content = await buf.bytes();
	console.log(content);
}
type Tbl2 = {
	id: number;
	val: ArrayBuffer;
	createAt: string;
};
async function test5() {
	const query = db.prepare("insert into tbl2(id, val) values (1, $val);");
	const buf = Bun.file("README.md");
	const cont_file = await buf.bytes();
	query.run({ $val: cont_file });
}
async function test7() {
	const query = db.query<Tbl2, number>("select * from tbl2 where id = ?");
	const rs = query.all(1);
	for (const r of rs) {
		const decodedText = new TextDecoder().decode(r.val);
		console.log(decodedText);
	}
}
function mappedType() {
	type a = "string" ;
	type name = "field1" | "field2" ;
	type hhh<Act, Val> = {
		[prop in keyof Act]: Val;
	};
   type r = hhh<name, a> 
}
mappedType();
