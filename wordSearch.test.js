const wordSearch = require("./wordSearch");

test("TEST ", () => {
  expect(wordSearch('ALLESSAYIOPEBUTNRACANHHEHREFOXIAAERUIFNRPRGELTHXSHWTUOHSTCURLITE', ['thin', 'oil', 'tube', 'fox', 'thought', 'curl', 'air', 'essay', 'shout', 'era'])).toBe(true)
});

test("TEST ", () => {
  expect(wordSearch('DELDNUBPETENHARALOSSOUNTPCHIEFDRUROHSOTZOAWENINLCLPOKERFORBIDMTC', ['crisis', 'kit', 'pat', 'chief', 'show', 'poker', 'forbid', 'couple', 'donor', 'bundle'])).toBe(false)
});

test("TEST ", () => {
  expect(wordSearch('LOBMYSALORDOTRECENTENSIOXAUEDNDYLHSAMTLFVEINNLBLSECOACERTYMRBFEH', ['nuance', 'record', 'helmet', 'rally', 'parade', 'tension', 'symbol', 'separate', 'vein', 'ash'])).toBe(false)
});

test("TEST ", () => {
  expect(wordSearch('PEANUTIHATEFOUSTLAGBRYUGAGAOANSNCVSTXENEEISTSDERNUELHOCTTAMEPROS', ['gate', 'bee', 'bottle', 'deny', 'census', 'peanut', 'message', 'palace', 'next', 'strength'])).toBe(true)
});

test("TEST ", () => {
  expect(wordSearch('CAFZEROTEOALGWNNGSNEAECIIZPCDGFSTTDIEBFUFASCEINOIELNURVCRHTXGMCE', ['ice', 'cousin', 'resident', 'conceive', 'drift', 'heat', 'zero', 'flag', 'run', 'pierce'])).toBe(false)
});

test("TEST ", () => {
  expect(wordSearch('KARALLOCGNTEBMAIBHEOCPFMRUNEOFUMAWGKDURAVDRECAZSEMJALOTSOXVACUNU', ['mass', 'cap', 'brave', 'knee', 'collar', 'alarm', 'vacuum', 'leg', 'fur', 'lot'])).toBe(true)
});

test("TEST ", () => {
  expect(wordSearch('NYBNETADOORTNAOESAYHOPDLITRSEOWIRSHEWHRVPOGWOSNEFAMILIARTENESBHT', ['ant', 'age', 'familiar', 'net', 'root', 'say', 'prison', 'bishop', 'deliver', 'slow'])).toBe(true)
});

test("TEST ", () => {
  expect(wordSearch('HOAIKPMKWDBNSEECIEESAHMAZFDTCRBBCIRIAUEDANONPSRETEECSHOECRTTTSIF', ['debate', 'ask', 'member', 'rush', 'obscure', 'instinct', 'feed', 'fist', 'all', 'catch'])).toBe(false)
});

test("TEST ", () => {
  expect(wordSearch('EBEGLAEROZPOSTVLKYEEONEOCUTETEISIBUYRCHTRMYGSBCNTCERIDAPRDIKOMAN', ['buy', 'lost', 'real', 'breeze', 'direct', 'man', 'post', 'trick', 'degree', 'achieve'])).toBe(true)
});

test("TEST ", () => {
  expect(wordSearch('MITSFOCAERCULTURMDHYKIRTGLANCELMYPRODUCEODICSVLGLETSOOADPRYGHMNI', ['produce', 'charity', 'employ', 'art', 'gem', 'raid', 'glance', 'hole', 'moon', 'ear'])).toBe(false)
});

