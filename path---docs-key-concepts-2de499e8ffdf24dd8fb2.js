webpackJsonp([431666382389],{429:function(t,n){t.exports={data:{markdownRemark:{html:'<h3>Introduction</h3>\n<p>Consenbus is a cryptocurrency that offers no fees, near-instant\ntransactions and extremely high scalability. Unlike traditional\ncryptocurrencies which use blockchains, Consenbus uses a\n<strong>block dag</strong> approach, in which each account has its own blockchain,\nand only the account owner can modify its blockchain.</p>\n<p>The usage of a block dag means that in order to complete a transaction,\nthe only parties who have to complete any work are the sender and the\nreceiver. This is a huge contrast to protocols like Bitcoin where the\nglobal network has to agree on the state of each and every transaction,\nresulting in huge energy costs and slow transactions.</p>\n<p>There are many more details to be found in the\n<a href="#">official whitepaper</a>, which is certainly worth reading,\nbut **          this documentation attempts to provide a much simpler, summarized\nversion of what’s in the whitepaper that’s more approachable to normal\nprogrammers. It also includes a lot of details that, as far as I know,\nare not documented anywhere else.\n**Enjoy!</p>\n<h3>Wallets</h3>\n<p>A <strong>wallet</strong> is a cryptographic data structure that contains an\narbitrary number of deterministically indexed accounts. A wallet has no\nfunction or purpose other than holding accounts.</p>\n<h4>Seed</h4>\n<p>Each wallet is generated from the hash of a <strong>seed</strong>, a 64-byte\nuppercase hex string (like<code>9F0E444C69F77A49BD0BE89DB92C38FE713E0963165CCA12FAF5712D7657120F</code>) that can be generated by a node or passed in by the user.\n**          Anyone who has access to a wallet’s seed can access all of its\naccounts from any node in the network.\n**\nTherefore it’s extremely important to safeguard your wallet seed in\norder to ensure you that don’t lose access to your account, and that\nnobody else gains access to your account.</p>\n<h3>Accounts</h3>\n<p>An account (also known as a frontier) is an entity in a wallet that is\nable to send and receive transactions and retain a balance. Each account\nhas a 64-byte address (also known as an identifier) starting with\n<code>bus_</code> and its own blockchain, which only the account holder\ncan modify. See <a href="http://localhost:8089/test.html#block">Blocks</a> below to find out what\ntypes of transactions accounts can make.</p>\n<h4>Index</h4>\n<p>Each account is generated deterministically from a <strong>wallet seed</strong>\nand an <strong>index</strong>. For example, the seed\n<code>9F0E444C69F77A49BD0BE89DB92C38FE713E0963165CCA12FAF5712D7657120F</code>\nhas the following addresses:</p>\n<table>\n<thead>\n<tr>\n<th>Index</th>\n<th>Address</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>0</td>\n<td><code>bus_3yiqftdf6t4s9nwhtpjpqr1sd5yinyupa3m54fh7c1mxy53bkpecczshr4uy</code></td>\n</tr>\n<tr>\n<td>1</td>\n<td><code>bus_3x3z1ak17y4edwccme1bkc9nrniy49moiumd1ernhh341ctm14ccsopkknnw</code></td>\n</tr>\n<tr>\n<td>⋮</td>\n<td>⋮</td>\n</tr>\n<tr>\n<td>10\n<sup>\n19\n</sup>\n - 1</td>\n<td><code>bus_1jw3tw7tsmkoexcgz4ubyzwqprsx3c9wkxuor5bb6oh8f5k81d9odhnh1ukj</code></td>\n</tr>\n</tbody>\n</table>\n<p>Many services that integrate Consenbus choose to assign a unique index\nto each user of the service, thus giving each user their own unique\ndeposit address without any special processing required. A wallet can\nhold up to 10<sup>19</sup> - 1 accounts, which should be enough for any\npurpose.</p>\n<h4>Private key</h4>\n<p>An account’s private key is used for offline signing of blocks.\n**          Anyone with access to an account’s private key can send and receive\ntransactions on behalf of that account from any node.\n**</p>\n<h4>Public key</h4>\n<p>An account’s public key is used to derive its address and as the initial\nwork hash for the account’s open block (see below).</p>\n<h4>Opening an account</h4>\n<p>An account’s first transaction must always be an <strong>open</strong> block. An\nopen block is like a receive block—it must have an accompanying\n<strong>send</strong> transaction in order to be valid. In other words, you need\nto send $BUS to an account’s address before you can open it.</p>\n<h3>Representatives</h3>\n<p>Representatives are accounts which cast votes in the case of a fork in\nthe network. Account holders who are unable to reliably participate in\nvoting for connectivity reasons can name a representative who can vote\nwith the weight of their balance, but do not otherwise have any access\nto their funds. Each account may name one representative.\nA good representative is a node that has high uptime (so it can\nvote frequently) and a locally stored wallet containing accounts that\nother users can delegate to. Maximizing the number and diversity of\nrepresentatives increases network resiliency.</p>\n<h4>Changing representatives</h4>\n<p>An account holder can change representatives any time by sending a\n<strong>change</strong> block to the network.</p>\n<h3>Blocks</h3>\n<p>A block represents a transaction made by an account in the network.\nThere are four types: <strong>send</strong>, <strong>receive</strong>, <strong>open</strong> and\n<strong>change</strong>. All block types share a few common parameters:</p>\n<p>COMMON PARAMETERS</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>The block’s type (send, receive, open or change).</td>\n</tr>\n<tr>\n<td>previous</td>\n<td>The hash of the previous block in the account’s blockchain, or the account’s public key if this is its first block.</td>\n</tr>\n<tr>\n<td>work</td>\n<td>A \n<a href="http://localhost:8089/test.html#block-pow">Proof of Work</a>\n hash generated based on the previous block’s hash.</td>\n</tr>\n<tr>\n<td>signature</td>\n<td>A unique \n<a href="http://ed25519.cr.yp.to/">ED25519</a>\n (with \n<a href="https://blake2.net/">Blake2b</a>\n digest) signature generated based on the block’s contents that is easily verified.</td>\n</tr>\n</tbody>\n</table>\n<h4>Send block</h4>\n<p>A send block is used to send funds to another account. Once a send block\nis published to the network, the amount in the send block is\nirreversibly deducted from the balance of the sending account. A send is\nconsidered to be “pocketed” when the receiving account publishes a\nreceive block (see below).</p>\n<p>SPECIAL PARAMETERS</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>account</td>\n<td>The identifier of the account to send funds to.</td>\n</tr>\n<tr>\n<td>balance</td>\n<td>The sending account’s balance as of the previous block, in rawformat.</td>\n</tr>\n<tr>\n<td>amount</td>\n<td>The amount of $BUS to send, in raw format.</td>\n</tr>\n</tbody>\n</table>\n<p>EXAMPLE BLOCK</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>send</code></td>\n</tr>\n<tr>\n<td>account</td>\n<td><code>bus_1updxgcgxkxrrpdcydfd7yxowfmbohdnbr3pmumk191cbru61spczr9jgmhf</code></td>\n</tr>\n<tr>\n<td>balance</td>\n<td><code>2007125000000000000000000000000</code></td>\n</tr>\n<tr>\n<td>amount</td>\n<td><code>100000000000000000000000000000</code></td>\n</tr>\n<tr>\n<td>previous</td>\n<td><code>A286FD300598BF0C8CCC1196943B9CEB94F268CC89F2010B7F7EE4055CC6AB8C</code></td>\n</tr>\n<tr>\n<td>work</td>\n<td><code>1e6b3b4c936d327e</code></td>\n</tr>\n<tr>\n<td>signature</td>\n<td><code>8BB727F2ED60F17877117D1B2E823C1484DF67DA9454CE80A4BC84E8465568F1A26E5A5EECD79A2B133DF8F250E270AAC52D9583441BDC6125766FDAA7818109</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Receive block</h4>\n<p>A receive block is used to complete (or “pocket”) a transfer of value.\nIt is only valid if it’s matched with a send block (source) addressed to\nthe receiving account.</p>\n<p>SPECIAL PARAMETERS</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>source</td>\n<td>The hash of the send block that is being received.</td>\n</tr>\n</tbody>\n</table>\n<p>EXAMPLE BLOCK</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>receive</code></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>DED555CE596E54F783424BA3DEC0B6EEF26E9E865DE1FCA3B58264555FC184E8</code></td>\n</tr>\n<tr>\n<td>previous</td>\n<td><code>81D04E3188A5E8CF6BD98BBE836156B4CA0E395D3188AAF1BA20A15172E375D2</code></td>\n</tr>\n<tr>\n<td>work</td>\n<td><code>60f1e62e2f5d0561</code></td>\n</tr>\n<tr>\n<td>signature</td>\n<td><code>1BD5AFE968F37C1FDA96B0C2CB5381377BD2CAD4D6D6331B6160B304F6A1C54076DAB885EF4DC1F0BB79AE7B58575140BEF709E32D8A1DCD5D4210684C567E0C</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Open block</h4>\n<p>An open block is used to open account and is functionally the same as a\nreceive block. An open block must be the first block in every account’s\nblockchain, and must name the account’s representative.</p>\n<p>SPECIAL PARAMETERS</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>source</td>\n<td>The hash of the send block that is being received.</td>\n</tr>\n<tr>\n<td>representative</td>\n<td>The account identifier of the representative that this account will delegate to (can be its own identifier).</td>\n</tr>\n</tbody>\n</table>\n<p>EXAMPLE BLOCK</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>open</code></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>69161915A1715B26BE22C7BD8DBFA4A282D0CDC09AA45552773FB42581263C2A</code></td>\n</tr>\n<tr>\n<td>previous</td>\n<td><code>2F93C5B0A5B1A6500220E50FA35402DB714C2B2A6CE826CED52D8CB78096D396</code></td>\n</tr>\n<tr>\n<td>representative</td>\n<td><code>bus_1anrzcuwe64rwxzcco8dkhpyxpi8kd7zsjc1oeimpc3ppca4mrjtwnqposrs</code></td>\n</tr>\n<tr>\n<td>work</td>\n<td><code>228a08d5e9b1b4c5</code></td>\n</tr>\n<tr>\n<td>signature</td>\n<td><code>DBA741223C3EF29C6434B7DE996F71EA9F6C572BCA9A4E1F5003FD4BE9005FA8F71D522BF15D69FC820AA2C6D24772468B90CC03C8FFE763D8D537924BF6AA03</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Change block</h4>\n<p>A change block is used to change an account’s representative. There is\nno cost associated with this action.</p>\n<p>SPECIAL PARAMETERS</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>representative</td>\n<td>The account identifier of the new representative that this account will delegate to (can be its own identifier).</td>\n</tr>\n</tbody>\n</table>\n<p>EXAMPLE BLOCK</p>\n<table>\n<thead>\n<tr>\n<th>col 1</th>\n<th>col 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>change</code></td>\n</tr>\n<tr>\n<td>previous</td>\n<td><code>7605DBF66FBA3A0BD92B81303AE613193F1E8CB990FC3894E6AAEA8E1C83B849</code></td>\n</tr>\n<tr>\n<td>representative</td>\n<td><code>bus_3pczxuorp48td8645bs3m6c3xotxd3idskrenmi65rbrga5zmkemzhwkaznh</code></td>\n</tr>\n<tr>\n<td>work</td>\n<td><code>fe7cb9eeb491ddbb</code></td>\n</tr>\n<tr>\n<td>signature</td>\n<td><code>F9EF13E84621386C6182B7CBE40D88EC518E3A6F8509B0AE0E7402C2DF161C22CF515BA148CDB62D18046329A34D86DEBA448240330DF5B5CED6BB80420C3204</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Proof of Work</h4>\n<p>As an anti-spam measure, each block published to the network must\ninclude a valid <strong>work</strong> parameter, which is an 8-byte <a href="https://blake2.net/">Blake2b</a>\nhash that is computed from the hash of the most recent block in the\naccount’s blockchain (or the account’s public key, if the account has no\nblocks yet).</p>\n<p>The Proof of Work algorithm works by iterating through random 32-bit\nintegers concatenated with the hash of the most recent block until the\nBlake2b hash is below a certain work threshold agreed upon by all nodes\nin the network.</p>\n<p>Proof of Work is not meant to take a long time—it can take as little as\n0.2 seconds on average on the fastest GPUs available in early 2018. It\nis simply meant to prevent abuse of the network. Since every block an\naccount publishes must include work generated from the previous block’s\nhash, an account can send a maximum of 5 transactions per second with\nhigh-end hardware.</p>',excerpt:"Introduction Consenbus is a cryptocurrency that offers no fees, near-instant\ntransactions and extremely high scalability. Unlike traditional…",timeToRead:9,fields:{slug:"/docs/key-concepts/"},frontmatter:{title:"Key Concepts"}}},pathContext:{slug:"/docs/key-concepts/"}}}});
//# sourceMappingURL=path---docs-key-concepts-2de499e8ffdf24dd8fb2.js.map