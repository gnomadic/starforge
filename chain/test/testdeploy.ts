import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers, deployments, getNamedAccounts } from "hardhat";
import { getContract, setNight, setTime } from "./testutils";
const fs = require("fs");

describe("deploy", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployEngine() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        await deployments.fixture(["engine"]);

        console.log("deploying engine");

        const ok = true;


        return { ok };
    }

    describe("deployment", function () {
        it("should deploy", async function () {
            const { ok } = await loadFixture(
                deployEngine
            );

            expect(ok).to.be.equal(true);

        });


    });


});